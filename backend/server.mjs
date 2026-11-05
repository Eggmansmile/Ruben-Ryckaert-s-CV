import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json({ limit: '20kb' }));

// Verify env variables
if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
  console.error('ERROR: SMTP_USER or SMTP_PASSWORD not set in .env file');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Test SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Error:', error.message);
  } else {
    console.log('✓ SMTP connection verified');
  }
});

// User input goes into HTML mail, so escape it.
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// shortcut: in-memory limit, resets on restart; fine for one container.
const hits = new Map();
const LIMIT_PER_IP = 5, LIMIT_TOTAL = 50, WINDOW_MS = 60 * 60 * 1000;
let total = { n: 0, since: Date.now() };
function limited(ip) {
  const now = Date.now();
  if (now - total.since > WINDOW_MS) { total = { n: 0, since: now }; hits.clear(); }
  const n = (hits.get(ip) || 0) + 1;
  hits.set(ip, n);
  return n > LIMIT_PER_IP || ++total.n > LIMIT_TOTAL;
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Behind Cloudflare tunnel -> nginx, the real client IP is in CF-Connecting-IP.
    const ip = req.get('cf-connecting-ip') || req.get('x-real-ip') || req.ip;
    if (limited(ip)) {
      return res.status(429).json({ error: 'Too many messages, try again later' });
    }

    if (![name, email, subject, message].every((v) => typeof v === 'string' && v.trim())) {
      return res.status(400).json({ error: 'All fields required' });
    }
    if (name.length > 100 || email.length > 200 || subject.length > 200 || message.length > 5000) {
      return res.status(400).json({ error: 'Input too long' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: `Contact: ${subject.replace(/[\r\n]/g, ' ')}`,
      html: `
        <h2>Message from ${esc(name)}</h2>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <h3>Subject:</h3>
        <p>${esc(subject)}</p>
        <h3>Message:</h3>
        <p>${esc(message).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    console.log('📤 Sending emails...');
    await transporter.sendMail(mailOptions);
    console.log('✓ Email sent to you');

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Email error:', error.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 SMTP User: ${process.env.SMTP_USER}`);
  console.log(`📮 Recipient: ${process.env.RECIPIENT_EMAIL || process.env.SMTP_USER}\n`);
});

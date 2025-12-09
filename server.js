import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log('📧 Email request received:', { name, email, subject });

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: `Contact: ${subject}`,
      html: `
        <h2>Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Subject:</h3>
        <p>${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    const autoReplyOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Re: ${subject}`,
      html: `
        <h2>Thank you ${name}!</h2>
        <p>I received your message and will get back to you as soon as possible.</p>
        <p>Best regards</p>
      `,
    };

    console.log('📤 Sending emails...');
    await transporter.sendMail(mailOptions);
    console.log('✓ Email sent to you');
    
    await transporter.sendMail(autoReplyOptions);
    console.log('✓ Auto-reply sent to sender');

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Email error:', error.message);
    res.status(500).json({ error: error.message || 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 SMTP User: ${process.env.SMTP_USER}`);
  console.log(`📮 Recipient: ${process.env.RECIPIENT_EMAIL || process.env.SMTP_USER}\n`);
});

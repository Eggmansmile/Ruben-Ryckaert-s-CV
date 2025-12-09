import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE || 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Email to you
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

    // Auto-reply to sender
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

    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}

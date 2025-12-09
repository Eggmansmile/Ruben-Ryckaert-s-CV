# SMTP Email Setup Guide

This guide explains how to set up the contact form email functionality.

## Prerequisites

- Node.js 18+ installed
- npm packages: `express`, `nodemailer`, `cors`, `dotenv`

## Installation

1. Install required packages:
```bash
npm install express nodemailer cors dotenv
```

2. Create a `.env` file in the project root (copy from `.env.example`):
```bash
cp .env.example .env
```

## Configuration by Provider

### Gmail (Recommended)

1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer"
3. Generate an app password (16 characters)
4. Update `.env`:
```env
SMTP_SERVICE=gmail
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
RECIPIENT_EMAIL=your-email@gmail.com
```

### Other SMTP Providers

#### Outlook/Microsoft 365
```env
SMTP_SERVICE=outlook
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
RECIPIENT_EMAIL=your-email@outlook.com
```

#### SendGrid
```env
SMTP_SERVICE=sendgrid
SMTP_USER=apikey
SMTP_PASSWORD=SG.xxxxxxxxxxxxx
RECIPIENT_EMAIL=verified-email@example.com
```

#### Custom SMTP Server
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASSWORD=your-password
RECIPIENT_EMAIL=recipient@example.com
```

## Running Locally

### Development

1. Start the backend server:
```bash
node server.js
```
Server runs on `http://localhost:3001`

2. In another terminal, start Vite dev server:
```bash
npm run dev
```
App runs on `http://localhost:3000`

3. Test the contact form at `http://localhost:3000`

## Production Deployment

For production, you have two options:

### Option 1: Separate Backend + Frontend (Recommended)

- Deploy backend to services like:
  - Heroku
  - Railway
  - Render
  - AWS Lambda
  - Vercel Functions

- Deploy frontend to GitHub Pages (already configured)

- Update API endpoint in `components/Contact.tsx`:
```tsx
const response = await fetch('https://your-backend.com/api/send-email', {
```

### Option 2: Serverless Function (Easiest)

Use Vercel Edge Functions or AWS Lambda:

```typescript
// api/send-email.ts (Vercel)
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { name, email, subject, message } = req.body;
  // ... email logic
};
```

## Security Best Practices

1. **Never commit `.env` file**
   - Already in `.gitignore`
   - Never push credentials to GitHub

2. **Use environment variables**
   - Keep credentials out of code
   - Rotate passwords regularly

3. **Validate input**
   - Email validation ✓
   - Field requirements ✓
   - Length limits (recommended)

4. **Rate limiting**
   - Add rate limit middleware to prevent spam
   - Example: `express-rate-limit`

5. **HTTPS only**
   - Always use HTTPS in production
   - Protects credentials in transit

## Troubleshooting

### "Failed to connect to server"
- Ensure backend is running on port 3001
- Check firewall/network settings
- Verify API endpoint in Contact.tsx

### "Invalid login"
- Gmail: Use App Password, not regular password
- Other services: Verify credentials are correct
- Check SMTP_SERVICE name is correct

### "Email not received"
- Check RECIPIENT_EMAIL is correct
- Verify email provider isn't filtering as spam
- Check backend console for errors
- Verify credentials have permission to send

### "CORS error"
- Backend must have `cors` enabled (already done)
- Check API endpoint URL matches frontend
- Verify backend is running

## Testing

1. Fill in the contact form
2. Submit
3. Check:
   - Success message appears
   - Email received in inbox
   - Auto-reply sent to sender

## Next Steps

- [ ] Set up `.env` file with your email
- [ ] Test locally
- [ ] Deploy backend to production
- [ ] Update API endpoint if using remote backend
- [ ] Test production deployment
- [ ] Add rate limiting for production
- [ ] Set up email forwarding rules (optional)

## Support

For issues, check:
- Backend console logs
- Browser console (DevTools)
- Email spam folder
- SMTP provider documentation

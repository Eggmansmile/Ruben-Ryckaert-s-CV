# Deploy Backend to Vercel (Free)

Vercel provides free serverless functions perfect for SMTP email.

## 🚀 Step 1: Sign up for Vercel

1. Go to https://vercel.com
2. Click "Sign Up"
3. Connect GitHub account
4. Authorize Vercel

## 🚀 Step 2: Import Your Repository

1. Go to https://vercel.com/new
2. Select "Import GitHub Repository"
3. Search for `Ruben-Ryckaert-s-CV`
4. Click "Import"

## 🚀 Step 3: Configure Environment Variables

**Before clicking Deploy**, add environment variables:

1. Scroll down to "Environment Variables"
2. Add these 4 variables:

```
SMTP_SERVICE = gmail
SMTP_USER = ruben.ryckaert89@gmail.com
SMTP_PASSWORD = xxxx xxxx xxxx xxxx (your app password)
RECIPIENT_EMAIL = ruben.ryckaert89@gmail.com
```

3. Click "Deploy"

## ✅ Step 4: Get Your Vercel URL

After deployment completes:

1. Your site will be at: `https://your-project.vercel.app`
2. Backend function URL: `https://your-project.vercel.app/api/send-email`
3. Copy this URL

## 🔧 Step 5: Update Frontend

Update `components/Contact.tsx` with your Vercel URL:

```typescript
const response = await fetch('https://your-project.vercel.app/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

Or use the relative path `/api/send-email` (works automatically on same domain).

## 🧪 Step 6: Test

1. Visit your deployed site: `https://your-project.vercel.app/Ruben-Ryckaert-s-CV/`
2. Fill in contact form
3. Submit
4. Check email ✅

## 🔄 Auto-Deployment

Vercel automatically redeploys when you push to GitHub!

1. Make changes locally
2. `git push` to GitHub
3. Vercel automatically rebuilds and deploys
4. Check Deployments tab on Vercel dashboard

## 📋 Summary

**Frontend:** GitHub Pages → `https://eggmansmile.github.io/Ruben-Ryckaert-s-CV/`
**Backend:** Vercel → `https://your-project.vercel.app/api/send-email`
**Everything:** Auto-deploys from GitHub!

## 🔐 Security

- ✅ Environment variables stored securely on Vercel
- ✅ Never committed to GitHub
- ✅ Vercel encrypts at rest
- ✅ HTTPS by default

## 🆘 Troubleshooting

**"Function not found" error:**
- Check Vercel dashboard → Deployments tab
- Look for errors in build logs
- Make sure `api/send-email.js` exists

**"Email not sending" error:**
- Check environment variables are set correctly
- Verify app password is correct
- Check Vercel function logs

**"CORS error" error:**
- CORS is configured in the function
- Try clearing browser cache
- Make sure you're using correct Vercel URL

## 💡 Next Steps

- [ ] Sign up for Vercel
- [ ] Import GitHub repo
- [ ] Add environment variables
- [ ] Deploy
- [ ] Get Vercel URL
- [ ] Update Contact.tsx with URL (if needed)
- [ ] Test contact form on deployed site
- [ ] Push changes
- [ ] Auto-redeploy happens!

**Done! Backend running on cloud! ☁️**

# Gemini Development Guide

This document helps Gemini AI understand the project structure and assist with development.

## 📋 Project Overview

**Project Name:** Ruben Ryckaert's CV/Portfolio  
**Type:** React + TypeScript Portfolio Website  
**Deployment:** GitHub Pages (Frontend) + Custom Server (Backend)  
**Stack:** React, Vite, TypeScript, Tailwind CSS, Express, Nodemailer

---

## 🏗️ Project Structure

```
Ruben-Ryckaert-s-CV/
├── components/              # React components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero/intro section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Project showcase
│   ├── Skills.tsx          # Skills display
│   ├── Contact.tsx         # Contact form (SMTP integration)
│   └── Footer.tsx          # Footer
├── api/                     # Vercel serverless functions
│   └── send-email.js       # Email sending endpoint
├── App.tsx                 # Main app component
├── index.tsx               # React entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
├── package.json            # Dependencies
├── server.js               # Express backend (runs on custom server)
├── config.ts               # Configuration file (name, email, etc)
├── types.ts                # TypeScript type definitions
├── tailwind.config.js      # Tailwind CSS config (if needed)
├── vercel.json             # Vercel deployment config
├── .env                    # Environment variables (NOT in repo)
├── .env.example            # Example env variables
├── .gitignore              # Git ignore rules
├── SMTP_SETUP.md           # SMTP configuration guide
├── VERCEL_DEPLOYMENT.md    # Vercel deployment guide
├── CUSTOM_SERVER_SETUP.md  # Custom server deployment guide
└── README.md               # Project readme
```

---

## 🔑 Key Technologies

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool (fast development)
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library

### Backend
- **Express.js** - Node.js web framework
- **Nodemailer** - SMTP email sending
- **CORS** - Cross-origin requests
- **dotenv** - Environment variable management

### Deployment
- **GitHub Pages** - Frontend hosting (free)
- **Custom Server** - Backend hosting (PM2 process manager)

---

## 📁 Important Files

### Core App Files

**App.tsx** - Main component that renders all sections
```typescript
// Imports and renders: Header, Hero, About, Experience, Projects, Skills, Contact, Footer
```

**config.ts** - User configuration
```typescript
export const CONFIG = {
  name: "Ruben Ryckaert",
  email: "ruben.ryckaert89@gmail.com",
  phone: "+32 XXX XXX XXX",
  location: "Leuven, Belgium",
  website: "eggmansmile.github.io",
  // ... other config
};
```

**types.ts** - TypeScript type definitions
```typescript
interface ProjectItem { /* ... */ }
interface ExperienceItem { /* ... */ }
interface SkillCategory { /* ... */ }
```

### Backend Files

**server.js** - Express server (runs on custom server)
- POST `/api/send-email` - Sends emails via SMTP
- GET `/api/health` - Health check endpoint
- Handles: Validation, error handling, auto-reply

**api/send-email.js** - Vercel serverless function (alternative)
- Same functionality as server.js
- Runs on Vercel instead of custom server

---

## 🔄 Development Workflow

### Local Development

```bash
# Terminal 1: Frontend
npm run dev          # Vite dev server (http://localhost:3000)

# Terminal 2: Backend (optional for testing)
node server.js       # Express server (http://localhost:3001)
```

### Building

```bash
npm run build        # Creates dist/ folder for production
```

### Deployment

```bash
git push origin main # Triggers:
                     # 1. GitHub Pages deploy (frontend)
                     # 2. Backend redeploy (if on custom server)
```

---

## 🎨 Component Structure

### Header Component
- Navigation links
- Dark/light mode toggle
- Responsive mobile menu

### Hero Component
- Intro headline
- Description
- CTA buttons (Download CV, Contact)

### About Component
- Bio paragraph
- Key highlights
- Skills overview

### Experience Component
- Timeline of work/projects
- Dates, titles, descriptions
- Technologies used

### Projects Component
- Project cards/grid
- Images, descriptions
- Links to projects/GitHub

### Skills Component
- Skills organized by category
- Proficiency levels (optional)
- Icons/badges

### Contact Component
- Contact form (SMTP integrated)
- Contact information cards
- Email, phone, location, website

### Footer Component
- Copyright info
- Social links
- Quick links

---

## 🔐 Environment Variables

### Required for Email (Backend)

```env
SMTP_SERVICE=gmail              # Email provider
SMTP_USER=ruben.ryckaert89@gmail.com  # Your email
SMTP_PASSWORD=xxxx xxxx xxxx xxxx     # Gmail app password
RECIPIENT_EMAIL=ruben.ryckaert89@gmail.com  # Where emails go
PORT=3001                       # Backend port
NODE_ENV=production             # Environment
```

### Where Used
- `.env` - Local/server (never in repo)
- `.env.example` - Template for reference
- GitHub Secrets - For CI/CD (if using)
- Vercel Env Vars - For serverless functions

---

## 🚀 Common Development Tasks

### Add a New Section

1. Create component: `components/NewSection.tsx`
2. Add to `App.tsx`
3. Style with Tailwind CSS
4. Deploy: `git push`

### Update Contact Information

1. Edit `config.ts`
2. Update email, phone, location
3. Component auto-updates
4. Deploy: `git push`

### Add New Project

1. Edit `components/Projects.tsx`
2. Add project object to array
3. Include: title, description, image, links, tech
4. Deploy: `git push`

### Fix Bug in Backend

1. Update `server.js` (or `api/send-email.js`)
2. Test locally: `node server.js`
3. `git push` to deploy
4. PM2 auto-restarts (if using custom server)

### Update Styling

1. Modify Tailwind classes in components
2. No build step needed (Vite handles it)
3. `npm run dev` shows changes instantly
4. `git push` to deploy

---

## 📊 Current Features

✅ Responsive portfolio website  
✅ Dark/light mode support  
✅ Contact form with SMTP email  
✅ Auto-reply functionality  
✅ GitHub Pages deployment  
✅ Custom server backend option  
✅ Environment variable management  
✅ TypeScript for type safety  
✅ Tailwind CSS for styling  
✅ Mobile-friendly design  

---

## 🔄 Deployment Flow

```
Local Development
    ↓ (git push)
GitHub Repository
    ↓
GitHub Actions (Deploy Workflow)
    ├→ Frontend: GitHub Pages (auto)
    └→ Backend: Custom Server (manual or auto)
    ↓
Live Site
├→ https://eggmansmile.github.io/Ruben-Ryckaert-s-CV/
└→ Backend at: your-server-ip:3001/api/send-email
```

---

## 🐛 Debugging Tips

### Frontend Issues
- Check browser console (F12)
- Verify Tailwind classes are correct
- Check component props
- Verify config.ts values

### Backend Issues
- Check `node server.js` console logs
- Verify .env file has all variables
- Test with curl: `curl -X POST http://localhost:3001/api/send-email`
- Check Gmail/SMTP provider settings
- Verify app password is correct

### Deployment Issues
- Check GitHub Actions logs
- Verify .env variables on server
- Check PM2 logs: `pm2 logs portfolio-api`
- Verify firewall/port settings

---

## 📚 Resources

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Docs](https://vitejs.dev)
- [Express.js](https://expressjs.com)
- [Nodemailer](https://nodemailer.com)
- [GitHub Pages](https://pages.github.com)

---

## 💡 Development Principles

1. **Keep components small** - Single responsibility principle
2. **Use TypeScript** - Catch errors early
3. **Responsive first** - Mobile-first design
4. **Accessibility** - WCAG compliance
5. **Performance** - Optimize images, code splitting
6. **Security** - Never commit secrets, validate input
7. **Documentation** - Comment complex logic

---

## 🎯 Future Enhancements

Potential features to add:
- [ ] Blog section
- [ ] Dark mode persistent storage
- [ ] Analytics integration
- [ ] Search functionality
- [ ] Comments on projects
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Social media feed
- [ ] Performance metrics
- [ ] SEO optimization

---

## 📞 Getting Help from Gemini

When asking Gemini for help, mention:
- **What you want to do** - "Add a new project to the portfolio"
- **Where the code is** - "In components/Projects.tsx"
- **What's not working** - "Contact form not sending emails"
- **What you've tried** - "Already checked the .env file"

Example: "I want to add a dark mode toggle to the Header component. Can you help me update components/Header.tsx?"

---

## ✅ Project Setup Checklist

- [x] Frontend deployed to GitHub Pages
- [x] Backend set up on custom server
- [x] SMTP email configured
- [x] Contact form functional
- [x] TypeScript configured
- [x] Environment variables set
- [x] Documentation complete
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Analytics setup

---

**Last Updated:** 2025-12-09  
**Maintainer:** Ruben Ryckaert

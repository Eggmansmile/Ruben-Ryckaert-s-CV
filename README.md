# Ruben Ryckaert - Professional Portfolio

A modern, responsive, and fully customizable portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. Designed to showcase engineering projects, skills, and professional experience with a clean and professional aesthetic.

This project includes a **fully dockerized** setup with a custom **Node.js/Express backend** for handling contact form submissions securely via SMTP, all served through an **Nginx** reverse proxy with **HTTPS** support.

## 🚀 Features

- **Full-Stack Architecture**: React Frontend + Node.js/Express Backend.
- **Dockerized Deployment**: Entire stack (Frontend, Backend, Nginx) runs in orchestrated Docker containers.
- **Secure Communication**:
    - Nginx Reverse Proxy managing traffic.
    - HTTPS enabled with auto-generated self-signed certificates (production-ready structure).
    - HSTS (HTTP Strict Transport Security) header implementation.
- **Functional Contact Form**: Sends real emails using Nodemailer and SMTP (Gmail, etc.), with auto-reply functionality.
- **Responsive Design**: Mobile-first approach looking great on all devices.
- **Modern UI/UX**: Smooth scrolling, glassmorphism effects, dark mode support, and hover animations.
- **Sectioned Layout**:
  - **Hero**: Impactful introduction with call-to-action buttons.
  - **About**: Professional bio and key highlights.
  - **Skills**: Categorized view of technical and soft skills.
  - **Experience**: Timeline-style display of education and work history.
  - **Projects**: Card grid showcasing featured work with tags and links.
  - **Contact**: Integrated form connecting to the backend API.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Email**: Nodemailer (SMTP)
- **Security**: CORS, Environment Variables

### DevOps & Infrastructure
- **Containerization**: Docker & Docker Compose
- **Web Server / Proxy**: Nginx (Alpine Linux)
- **SSL**: OpenSSL (Self-signed for dev/testing, ready for Certbot)

## 📦 Getting Started

### Prerequisites

- Docker & Docker Compose
- Node.js (for local dev without Docker)

### 🐳 Docker Deployment (Recommended)

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd Ruben-Ryckaert-s-CV
    ```

2.  **Configure Environment Variables**:
    Create a `.env` file in the root directory (copy from `.env.example`):
    ```env
    # SMTP Configuration (for contact form)
    SMTP_SERVICE=gmail
    SMTP_USER=your.email@gmail.com
    SMTP_PASSWORD=your_app_password
    RECIPIENT_EMAIL=your.email@gmail.com

    # Server
    PORT=3001
    NODE_ENV=production

    # Frontend
    # Ensure this matches your server IP/Domain and mapped port (e.g., :82)
    VITE_API_URL=https://your-server-ip:82
    ```

3.  **Build and Run**:
    ```bash
    docker-compose up -d --build
    ```

4.  **Access the Site**:
    - Frontend: `https://localhost:82` (or your server IP)
    - Backend API: Internal only (proxied via Nginx)

### Local Development (Manual)

1.  **Install Frontend Dependencies**:
    ```bash
    npm install
    npm run dev
    ```

2.  **Install Backend Dependencies**:
    ```bash
    cd backend
    npm install
    node server.mjs
    ```

## ⚙️ Customization Guide

### 1. General Information
Open **`config.ts`**. This file acts as the central configuration for the site. Update your name, title, social links, and contact info here.

### 2. Updating Content
Content is located in `components/`:
- **Experience.tsx**: Work/Education history.
- **Projects.tsx**: Project showcase.
- **Skills.tsx**: Technical abilities.
- **About.tsx**: Bio text.

### 3. Images & Resume
- Place images in `public/images/`.
- Place your resume PDF at `public/resume.pdf`.

## 📄 License

This project is open source and available for personal use and modification.
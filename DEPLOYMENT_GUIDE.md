# Deployment Guide

This project is structured as a monorepo with a distinct **frontend** and **backend**.

## 📂 Structure
- `frontend/` - React Application (Vite)
- `backend/` - Express Server (Standalone)
- `api/` - Serverless Functions (Vercel)

## 🚀 Vercel Deployment (Recommended)

This requires **zero configuration** for the API, but slight configuration for the Frontend.

1.  **Import Project:** Import this repository into Vercel.
2.  **Build Settings:**
    *   **Build Command:** `npm run build` (This runs `npm run build --prefix frontend`)
    *   **Output Directory:** `frontend/dist` (IMPORTANT: You must change this from the default `dist`)
    *   **Install Command:** `npm install`
3.  **Environment Variables:**
    Add the following in Vercel Project Settings:
    *   `SMTP_USER`
    *   `SMTP_PASSWORD`
    *   `RECIPIENT_EMAIL` (Optional, defaults to SMTP_USER)
    *   `SMTP_SERVICE` (Optional, defaults to 'gmail')
    *   `VITE_API_URL` -> Set to `/api/send-email` (This ensures the frontend talks to the Vercel function, not localhost)

## 🌐 GitHub Pages Deployment

If you prefer GitHub Pages (static only):
1.  The `api/` folder **will not work**. You need a separate backend.
2.  Update `.github/workflows` to build from `frontend/`.
3.  Change the "Build" step in your workflow to:
    ```yaml
    - name: Build
      run: npm run build --prefix frontend
    ```
4.  Upload the artifact from `frontend/dist`.

## 🛠️ Local Development

1.  **Install Dependencies:**
    ```bash
    npm run install:all
    ```

2.  **Run Frontend:**
    ```bash
    npm run dev
    ```

3.  **Run Backend (Optional):**
    ```bash
    npm run start:backend
    ```

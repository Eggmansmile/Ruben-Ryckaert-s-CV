# Ruben Ryckaert - Professional Portfolio

A modern, responsive, and fully customizable portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. Designed to showcase engineering projects, skills, and professional experience with a clean and professional aesthetic.

## 🚀 Features

- **Responsive Design**: Looks great on mobile, tablet, and desktop.
- **Modern UI/UX**: Smooth scrolling, glassmorphism effects, and hover animations.
- **Sectioned Layout**:
  - **Hero**: Impactful introduction with call-to-action buttons (Projects, Resume, Contact).
  - **About**: Professional bio and key highlights.
  - **Skills**: Categorized view of technical and soft skills.
  - **Experience**: Timeline-style display of education and work history.
  - **Projects**: Card grid showcasing featured work with tags and links.
  - **Contact**: Functional layout for contact information and a message form.
- **Type-Safe**: Built with TypeScript for reliability and easier refactoring.

## 🛠️ Tech Stack

- **Framework**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS (via CDN for simplicity or PostCSS for production)
- **Icons**: Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository** (or download the files):
    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:3000` (or the network IP shown in the terminal).

4.  **Build for production**:
    ```bash
    npm run build
    ```

## ⚙️ Customization Guide

This project is structured to make customization easy. Most content is separated from logic.

### 1. General Information (Name, Socials, Contact)
Open **`src/config.ts`**. This file acts as the central configuration for the site.
Change the values here to update your name, email, phone number, and social media links globally.

```typescript
// src/config.ts
export const CONFIG = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  // ...
};
```

### 2. Updating Content Sections

Specific data is located within the component files in `src/components/`.

-   **Experience & Education**:
    -   Edit **`src/components/Experience.tsx`**.
    -   Modify the `experiences` array. You can add, remove, or reorder items.

-   **Projects**:
    -   Edit **`src/components/Projects.tsx`**.
    -   Update the `projects` array with your actual projects, descriptions, and links.

-   **Skills**:
    -   Edit **`src/components/Skills.tsx`**.
    -   Update the `skillsData` array to change categories or skill lists.

-   **About Me**:
    -   Edit **`src/components/About.tsx`** to update the bio text and the `highlights` array.

### 3. Images & Resume
-   **Images**: Create a folder `public/images/` and add the following files to match the code:
    -   `profile.jpg` (Hero section)
    -   `paper-airplane.jpeg`
    -   `stock-app.png`
    -   `circuit-design.jpg`
    -   `oxfam-design.png`
    
    *If you name your files differently, make sure to update the paths in `Hero.tsx` and `Projects.tsx`.*

-   **Resume**: Place your resume PDF file in the `public/` folder and name it **`resume.pdf`**. The "Download CV" button in the Hero section is configured to link to `/resume.pdf`.

```tsx
// Example in src/components/Hero.tsx
<a href="/resume.pdf" ... >Download CV</a>
```

### 4. Styling & Colors
The project uses Tailwind CSS.
-   **Colors**: The primary blue color (`blue-600`) and slate scale are used throughout. To change the theme, you can find-and-replace `blue-600` with your preferred Tailwind color (e.g., `emerald-600`, `indigo-600`).
-   **Fonts**: The font is set to "Inter" in `index.html`. You can change the Google Fonts link there to use a different typeface.

## 📄 License

This project is open source and available for personal use and modification.

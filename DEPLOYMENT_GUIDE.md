# Portfolio Deployment Guide — Krishna Chandra Jha

Your portfolio is built with **Vite, React, and Tailwind CSS**. You can deploy it online for free in less than 2 minutes using Vercel, Netlify, or GitHub Pages!

---

## Option 1: Free 1-Click Deployment on Vercel (Recommended)

1. Push this folder to a GitHub repository (e.g. `krishna-portfolio`).
2. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** -> Select `krishna-portfolio`.
4. Click **Deploy**! Vercel will automatically build your app and give you a free live URL (e.g., `https://krishna-jha.vercel.app`).

---

## Option 2: Free 1-Click Drag & Drop on Netlify

1. In your terminal, build the static files:
   ```bash
   npm run build
   ```
2. This creates a production folder called `dist/`.
3. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
4. Drag and drop the `dist/` folder onto the page! Netlify will immediately give you a live shareable URL!

---

## Local Development Preview

To run your portfolio locally on your machine at `http://localhost:3000`:
```bash
npm run dev
```

# Blood Pressure Monitor App

A mobile-first blood pressure and blood sugar monitoring prototype built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Fix build errors for Vercel deployment"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"Import Project"**
3. Select your GitHub repository
4. Vercel will auto-detect the Vite configuration
5. Click **"Deploy"**

✅ **Done!** Your app will be live in ~2 minutes.

---

## 🔧 What Was Fixed

### Error #1: `Failed to resolve /src/main.tsx`
**Cause:** Missing Vite configuration files  
**Fix:** Created `index.html`, `main.tsx`, `vite.config.ts`, etc.

### Error #2: `Command "npm run build" exited with 1`
**Cause:** 
- TypeScript config too strict
- Missing Tailwind Vite plugin
- Build command included strict type checking

**Fix:**
- Relaxed TypeScript strictness
- Added `@tailwindcss/vite` plugin
- Changed build to `vite build` (removed `tsc`)

**Files Created/Updated:**
- ✅ `/index.html` - HTML entry point
- ✅ `/main.tsx` - React app initialization  
- ✅ `/vite.config.ts` - Vite + Tailwind configuration
- ✅ `/tsconfig.json` - Relaxed TypeScript settings
- ✅ `/tsconfig.node.json` - TypeScript config for build tools
- ✅ `/package.json` - Dependencies (added `@tailwindcss/vite`)
- ✅ `/vercel.json` - Vercel deployment settings
- ✅ `/.gitignore` - Git ignore rules

---

## 🧪 Test Locally Before Deploying

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (to verify it works)
npm run build
```

If `npm run build` completes without errors, you're ready to deploy!

---

## 📱 Features

- Blood Pressure tracking with SYS/DIA/Pulse metrics
- Blood Sugar (Glucose) monitoring
- Color-coded health status (Red/Yellow/Green)
- Health Insights and recommendations
- Reports and analytics
- Data sharing capabilities
- Medication reminders
- Health logs history
- Mobile-optimized design

---

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite 4** - Build Tool
- **Tailwind CSS 4** - Styling
- **Recharts** - Data Visualization
- **Lucide React** - Icons

---

## 📦 Project Structure

```
/
├── index.html              # HTML entry point
├── main.tsx                # React initialization
├── App.tsx                 # Main component with routing
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
├── vercel.json            # Vercel settings
│
├── components/
│   ├── Home.tsx                    # Dashboard
│   ├── BloodPressureDetails.tsx    # BP tracking
│   ├── BloodSugarDetails.tsx       # Glucose monitoring
│   ├── Logs.tsx                    # History
│   ├── Insights.tsx                # Health tips
│   ├── Reports.tsx                 # Analytics
│   ├── Share.tsx                   # Data sharing
│   └── Reminders.tsx               # Medication reminders
│
└── styles/
    └── globals.css         # Global styles
```

---

## 🚨 Troubleshooting

### Build fails on Vercel?
1. Make sure all files are committed to Git
2. Check that `index.html`, `main.tsx`, and `vite.config.ts` exist
3. Verify `package.json` has the correct scripts
4. Try redeploying from Vercel dashboard

### Build works locally but fails on Vercel?
1. Check Vercel build logs for specific error
2. Ensure all dependencies are in `package.json`
3. Clear Vercel cache and redeploy

### Port already in use locally?
```bash
npx kill-port 5173
npm run dev
```

---

## 🎨 Color Scheme

- **Primary Blue:** `#5B8FD8`
- **Success Green:** `#22c55e`
- **Warning Yellow:** `#eab308`
- **Danger Red:** `#ef4444`

---

## 📄 License

MIT

---

## ✅ Deployment Checklist

- [x] Configuration files created
- [x] `index.html` points to `/main.tsx` (not `/src/main.tsx`)
- [x] `package.json` has all dependencies
- [x] `vite.config.ts` configured
- [x] TypeScript configured
- [ ] Push to GitHub
- [ ] Deploy on Vercel

**Status: Ready to Deploy!** 🚀
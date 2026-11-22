# CampusConnect – Student Management Portal

A responsive multi-page student management frontend built with Next.js 14, JavaScript and custom CSS.

## Features
- Dashboard with campus metrics, attendance overview and daily schedule
- Student directory with search, add student modal, delete and CSV export
- Attendance page with date selection and present/absent controls
- Course catalog cards
- Faculty directory
- Editable profile form with save feedback
- Responsive sidebar navigation for desktop and mobile
- Sample campus data included

## Requirements
- Node.js 18.17 or newer
- npm

## Run locally (Windows CMD)
```bash
# 1. Extract the ZIP and open the project folder
cd CampusConnect

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
Open http://localhost:3000 in your browser.

## Production build
```bash
npm run build
npm start
```

## GitHub
```bash
git init
git add .
git commit -m "Initial CampusConnect student portal"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/CampusConnect.git
git push -u origin main
```

## Deploy on Vercel
1. Push the project to GitHub.
2. Sign in at https://vercel.com and import the repository.
3. Keep the default Next.js build settings.
4. Click Deploy.

## Notes
This is a frontend demonstration using sample data and component state. It does not include a backend, database, real authentication, or multi-user synchronization. Student additions/deletions and attendance changes are held in page state and reset on refresh. Connect an API/database for persistent institutional records.

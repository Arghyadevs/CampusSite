#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="campus-site"
REPO_URL="https://github.com/Arghyadevs/CampusSite.git"
S3_BUCKET="arghyadevs-aws-collageinfo"
AWS_REGION="us-east-1"

mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

# Basic folders
mkdir -p src/components src/pages public .github/workflows

# .gitignore
cat > .gitignore <<'EOF'
# Dependencies
node_modules/

# Production build
/dist/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS
.DS_Store

# Env
.env
.env.*
EOF

# package.json
cat > package.json <<'EOF'
{
  "name": "campus-site",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy:prepare": "cp dist/index.html dist/404.html || true",
    "deploy": "npm run build && npm run deploy:prepare && aws s3 sync dist s3://arghyadevs-aws-collageinfo --delete"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.2.0"
  }
}
EOF

# vite.config.js
cat > vite.config.js <<'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
EOF

# index.html
cat > index.html <<'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="College Information Website" />
    <title>Campus Site</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

# src/main.jsx
cat > src/main.jsx <<'EOF'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Departments from './pages/Departments'
import Faculty from './pages/Faculty'
import Events from './pages/Events'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'academics', element: <Academics /> },
      { path: 'admissions', element: <Admissions /> },
      { path: 'departments', element: <Departments /> },
      { path: 'faculty', element: <Faculty /> },
      { path: 'events', element: <Events /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
EOF

# src/styles.css
cat > src/styles.css <<'EOF'
:root {
  --bg: #0b1726;
  --fg: #e9eef7;
  --muted: #a9b4c2;
  --accent: #3b82f6;
  --accent-2: #22c55e;
}
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  background: var(--bg);
  color: var(--fg);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
a { color: var(--fg); text-decoration: none; }
a:hover { color: var(--accent); }
.container { max-width: 1100px; margin: 0 auto; padding: 1rem; }
nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(7, 12, 20, 0.9); backdrop-filter: blur(6px);
  border-bottom: 1px solid #1f2a3a;
}
.navbar { display: flex; gap: 1rem; align-items: center; justify-content: space-between; }
.brand { font-weight: 700; letter-spacing: .2px; }
.menu { display: flex; flex-wrap: wrap; gap: .75rem; }
.footer { border-top: 1px solid #1f2a3a; margin-top: auto; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
.card { background: #0f2138; border: 1px solid #203049; border-radius: 10px; padding: 1rem; }
.btn { background: var(--accent); border: 0; color: white; padding: .6rem .9rem; border-radius: 8px; cursor: pointer; }
.btn.secondary { background: var(--accent-2); }
.hero { padding: 3rem 0; text-align: center; }
.subtle { color: var(--muted); }

@media (max-width: 720px) {
  .menu { gap: .5rem; }
}
EOF

# src/components/Layout.jsx
cat > src/components/Layout.jsx <<'EOF'
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="container" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
EOF

# src/components/NavBar.jsx
cat > src/components/NavBar.jsx <<'EOF'
import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  padding: '.4rem .6rem',
  borderRadius: 6,
  background: isActive ? '#1a2a43' : 'transparent',
  color: isActive ? '#ffffff' : undefined
})

export default function NavBar() {
  return (
    <nav>
      <div className="container navbar">
        <NavLink to="/" className="brand" style={{ fontSize: 18 }}>🏛️ Campus Site</NavLink>
        <div className="menu">
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/academics" style={linkStyle}>Academics</NavLink>
          <NavLink to="/admissions" style={linkStyle}>Admissions</NavLink>
          <NavLink to="/departments" style={linkStyle}>Departments</NavLink>
          <NavLink to="/faculty" style={linkStyle}>Faculty</NavLink>
          <NavLink to="/events" style={linkStyle}>Events</NavLink>
          <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
EOF

# src/components/Footer.jsx
cat > src/components/Footer.jsx <<'EOF'
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
        <div>
          <strong>Campus Site</strong> · © {new Date().getFullYear()} · All rights reserved
        </div>
        <div className="subtle">Built with React + Vite · Deployed on S3</div>
      </div>
    </footer>
  )
}
EOF

# Pages templates generator
make_page() {
  local name="$1"
  local title="$2"
  cat > "src/pages/${name}.jsx" <<EOF
import React from 'react'

export default function ${name}() {
  return (
    <section>
      <h1>${title}</h1>
      <p className="subtle">${title} information and resources.</p>
      <div className="grid" style={{ marginTop: '1rem' }}>
        <div className="card">Content block A</div>
        <div className="card">Content block B</div>
        <div className="card">Content block C</div>
      </div>
    </section>
  )
}
EOF
}

make_page Home "Welcome to Our College"
make_page About "About the College"
make_page Academics "Academics"
make_page Admissions "Admissions"
make_page Departments "Departments"
make_page Faculty "Faculty"
make_page Events "Events"
make_page Contact "Contact"

# NotFound page
cat > src/pages/NotFound.jsx <<'EOF'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1>404 - Page Not Found</h1>
      <p className="subtle">The page you are looking for doesn't exist.</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/" className="btn">Go Home</Link>
      </div>
    </section>
  )
}
EOF

# README.md
cat > README.md <<'EOF'
# Campus Site (React + Vite) — Deployed to AWS S3

Static SPA for a College Information website. Built with React + Vite, routed with react-router, deployed automatically to an AWS S3 bucket via GitHub Actions.

Bucket: arghyadevs-aws-collageinfo (Region: us-east-1)

## Local Development

- Prerequisites: Node.js 18+ and npm; optional AWS CLI for local deploys.
- Install and run:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
The build output is in `dist/`.

## S3 Static Website Hosting

1. Create or use the S3 bucket `arghyadevs-aws-collageinfo` in `us-east-1`.
2. Enable "Static website hosting" with:
   - Index document: `index.html`
   - Error document: `index.html` (SPA fallback)
3. Make the site public (for basic hosting):
   - Attach a Bucket Policy that allows public `s3:GetObject` on `arn:aws:s3:::arghyadevs-aws-collageinfo/*`.
   - Or prefer CloudFront for secure/public delivery.

Example bucket policy (public, simple demo):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::arghyadevs-aws-collageinfo/*"
    }
  ]
}
```

## CI/CD via GitHub Actions

- The workflow `.github/workflows/deploy.yml` builds the app and deploys to S3 on pushes to `main`.
- Configure repository secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION` = `us-east-1`

## Optional: Local Deploy

If you have AWS CLI configured locally with access to the bucket:
```bash
npm run deploy
```
This builds, copies `index.html` to `404.html` (for some static hosts), and syncs to S3.

## CloudFront + SSL (Optional, Production)

For better performance and HTTPS with a custom domain:
- Create a CloudFront distribution with the S3 website endpoint as origin.
- Set Default Root Object to `index.html`.
- Error Responses: 403 and 404 -> `/index.html` (200) to support SPA routing.
- Attach ACM certificate for your domain and route via Route 53.

## Repository

This project is initialized with git and points to: https://github.com/Arghyadevs/CampusSite.git

EOF

# GitHub Actions workflow
cat > .github/workflows/deploy.yml <<'EOF'
name: Build and Deploy to S3

on:
  push:
    branches: [ "main" ]

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Prepare SPA 404 fallback
        run: cp dist/index.html dist/404.html

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Sync to S3
        run: aws s3 sync dist s3://arghyadevs-aws-collageinfo --delete
EOF

# Install dependencies
echo "Installing dependencies..."
npm install

# Initialize git and set remote
if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "chore: scaffold Campus Site (React + Vite) with S3 GitHub Actions deploy"
  git branch -M main
  git remote add origin "$REPO_URL" || true
fi

cat <<MSG

Project scaffolded in: $(pwd)

Next steps:
1) cd "$PROJECT_DIR"
2) npm run dev   # local development server

GitHub setup:
- Create a GitHub repo at: $REPO_URL (if not already created), or pull if exists.
- git push -u origin main

GitHub Actions secrets to set in the repo settings:
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION = $AWS_REGION

AWS S3 bucket to create/configure: $S3_BUCKET (Region: $AWS_REGION)
- Enable Static website hosting with index and error document both set to index.html
- Make public or front with CloudFront

Once pushed to main, the workflow will build and deploy to S3 automatically.
MSG

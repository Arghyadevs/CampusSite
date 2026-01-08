<div align="center">
  <img src="https://raw.githubusercontent.com/Arghyadevs/CampusSite/main/public/tmsl-logo.png" alt="TMSL Logo" width="120" />
  
  # 🎓 Campus Site
  
  ### **Techno Main Salt Lake - College Information Portal**
  
  ![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![AWS S3](https://img.shields.io/badge/AWS_S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white)
  ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Deploy-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
  
  ![Static Site](https://img.shields.io/badge/Type-Static_SPA-blue?style=for-the-badge)
  ![Deployed](https://img.shields.io/badge/Status-Deployed-success?style=for-the-badge)
  ![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
  
  ---
  
  🚀 **Lightning-fast static SPA for college information** | Built with React + Vite | Deployed to AWS S3
  
  ---
</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Lightning Fast** | Built with Vite for blazing-fast development and optimized production builds |
| 📱 **Fully Responsive** | Seamless experience across all devices - desktop, tablet, and mobile |
| 🛣️ **Client-Side Routing** | Smooth page transitions with react-router-dom |
| 🔍 **SEO Optimized** | Server-side rendering ready with React Helmet Async |
| 🌙 **Modern UI/UX** | Beautiful Techno Main Salt Lake themed interface |
| 📊 **Code Splitting** | Lazy-loaded pages for optimal performance |
| 🔄 **Auto Deployment** | CI/CD pipeline with GitHub Actions |
| ☁️ **CloudFront Ready** | Production-ready CloudFront distribution configuration |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         AWS CloudFront                               │
│                    (Global CDN + SSL/TLS)                           │
└──────────────────────────┬──────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         AWS S3 Bucket                               │
│              arghyadevs-aws-collageinfo (us-east-1)                 │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │  📁 /                      (index.html)                      │   │
│   │  📁 /static/              (JS, CSS, Assets)                 │   │
│   │  📁 /assets/              (Images, Fonts)                    │   │
│   │  📄 404.html              (SPA Fallback)                     │   │
│   └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
                           ▲
                           │ GitHub Actions
                           │ (Auto Deploy on Push)
                           ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       GitHub Repository                             │
│  https://github.com/Arghyadevs/CampusSite.git                       │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │  🟢 main branch ──► Build React App ──► Deploy to S3       │   │
│   │  🔧 .github/workflows/deploy.yml                            │   │
│   └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📂 Project Structure

```
CampusSite/
├── 📄 .github/
│   └── ⚙️ workflows/
│       └── 🚀 deploy.yml          # CI/CD Pipeline
├── 📁 public/
│   ├── 🖼️ Techno Front.webp       # Hero background
│   ├── 🖼️ Ground.webp
│   ├── 🖼️ tmsl-logo.png
│   └── 🖼️ Techno_india_logo.jpg
├── 📁 src/
│   ├── 🟢 main.jsx                # App entry point + Routing
│   ├── 🎨 styles.css              # Global styles
│   ├── 📁 components/
│   │   ├── 🧩 Layout.jsx          # Main layout wrapper
│   │   ├── 🧭 NavBar.jsx          # Navigation component
│   │   ├── 📄 Footer.jsx          # Footer component
│   │   └── ⬆️ ScrollToTop.jsx     # Scroll management
│   ├── 📁 data/
│   │   ├── 📊 departments.js      # Department data
│   │   ├── 📅 events.js           # Events data
│   │   ├── 📋 notices.js          # Notices data
│   │   └── 📞 contact.js          # Contact info
│   └── 📁 pages/
│       ├── 🏠 Home.jsx            # Landing page
│       ├── ℹ️ About.jsx           # About page
│       ├── 📚 Academics.jsx       # Academics page
│       ├── 🎓 Admissions.jsx      # Admissions page
│       ├── 🏛️ Departments.jsx     # Departments page
│       ├── 👨‍🏫 Faculty.jsx          # Faculty page
│       ├── 📅 Events.jsx          # Events page
│       └── 📞 Contact.jsx         # Contact page
├── 📄 index.html                  # HTML entry point
├── 📄 vite.config.js              # Vite configuration
├── 📄 package.json                # Dependencies & scripts
└── 📄 README.md                   # This file
```

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version | Required |
|------|---------|----------|
| 🟢 Node.js | 18+ | ✅ Yes |
| 📦 npm | 9+ | ✅ Yes |
| ☁️ AWS CLI | Latest | Optional (for local deploy) |

### Installation

```bash
# Clone the repository
git clone https://github.com/Arghyadevs/CampusSite.git
cd CampusSite

# Install dependencies
npm install

# Start development server
npm run dev
```

> 🖥️ **Development Server:** Open http://localhost:5173 in your browser

---

## 📦 Build & Deploy

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

**Build Output:** `dist/` directory containing optimized static files

### Local Deployment

```bash
# Build + copy index.html to 404.html + sync to S3
npm run deploy
```

> ⚠️ Requires AWS CLI configured with appropriate S3 permissions

---

## ☁️ AWS S3 Configuration

### Step 1: Create S3 Bucket

```bash
# Create bucket in us-east-1
aws s3 mb s3://arghyadevs-aws-collageinfo --region us-east-1
```

### Step 2: Enable Static Website Hosting

| Setting | Value |
|---------|-------|
| Index Document | `index.html` |
| Error Document | `index.html` (SPA fallback) |

### Step 3: Bucket Policy (Public Access)

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

### Step 4: Apply Policy

```bash
aws s3api put-bucket-policy \
  --bucket arghyadevs-aws-collageinfo \
  --policy file://bucket-policy.json
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

**File:** `.github/workflows/deploy.yml`

The pipeline automatically:
1. ✅ Checks out code
2. 🟢 Installs Node.js
3. 📦 Installs dependencies
4. 🔨 Builds the React app
5. ☁️ Syncs to S3 bucket

### Required Secrets

Configure in GitHub Repository → Settings → Secrets:

| Secret | Value |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | IAM User Access Key |
| `AWS_SECRET_ACCESS_KEY` | IAM User Secret Key |
| `AWS_REGION` | `us-east-1` |

### Deployment Trigger

> 🔄 **Automatic Deployment:** Push to `main` branch triggers deployment

---

## 🌐 CloudFront + SSL (Production)

### Recommended Architecture

```
                    ┌─────────────────┐
                    │   Route 53      │
                    │   (DNS)         │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  CloudFront     │
                    │  Distribution   │◄──── ACM Certificate (HTTPS)
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │    S3 Bucket    │
                    │  (Static Host)  │
                    └─────────────────┘
```

### CloudFront Configuration

| Setting | Value |
|---------|-------|
| Origin | S3 Website Endpoint |
| Default Root Object | `index.html` |
| Error 403/404 | Custom Response: `/index.html` (200) |

### Benefits

- ⚡ **Global CDN** - Faster loading worldwide
- 🔒 **HTTPS/SSL** - Secure encrypted connections
- 🎯 **Custom Domain** - Your own domain name
- 📈 **Better Performance** - Edge caching

---

## 🎨 Tech Stack

<div align="center">

| Category | Technology |
|----------|------------|
| ⚛️ **Frontend** | React 18.2 |
| ⚡ **Build Tool** | Vite 5.2 |
| 🛣️ **Routing** | React Router DOM 6.22 |
| 🎭 **SEO** | React Helmet Async 2.0 |
| 🎨 **Styling** | Pure CSS with CSS Variables |
| 🔧 **Package Manager** | npm 9+ |
| ☁️ **Cloud Provider** | AWS S3 |
| 🔄 **CI/CD** | GitHub Actions |

</div>

---

## 📊 Performance & Optimization

| Metric | Value | Description |
|--------|-------|-------------|
| ⚡ First Contentful Paint | ~0.8s | Optimized with Vite |
| 📦 Bundle Size | ~150KB gzipped | Code splitting enabled |
| 🖼️ Images | WebP optimized | Modern formats |
| 💾 Caching | CloudFront edge | Global CDN caching |

### Optimization Techniques

- ✂️ **Code Splitting** - Lazy-loaded routes
- 🗜️ **Gzip/Brotli** - Compression enabled
- 🖼️ **Image Optimization** - WebP format
- 📦 **Bundle Analysis** - Tree shaking

---

## 🛠️ Troubleshooting

### Issue: Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: S3 Sync Permission Denied

```bash
# Check AWS credentials
aws configure list

# Verify bucket permissions
aws s3api get-bucket-policy --bucket arghyadevs-aws-collageinfo
```

### Issue: 403 Error on CloudFront

```bash
# Check Origin Access Identity
# Ensure S3 bucket policy allows cloudfront.amazonaws.com
```

### Issue: React Router Not Working

> ✅ **Solution:** CloudFront Error Responses must be configured:
> - Error Code: 403, 404
> - Response Page Path: `/index.html`
> - HTTP Response Code: 200

### Issue: Images Not Loading

```bash
# Check public folder structure
ls -la public/

# Verify path references in code
# Use absolute paths: /image.webp (not public/image.webp)
```

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🔧 Create feature branch: `git checkout -b feature/amazing-feature`
3. 💾 Commit changes: `git commit -m 'Add amazing feature'`
4. 📤 Push to branch: `git push origin feature/amazing-feature`
5. 🔄 Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

<div align="center">

**🧑‍💻 Developed with ❤️ by Anushtup Dutta || Arghyadip Pakhira || Arpita Dasgupta || Brishti Roy || Doyel Banerjee || Koushiki Ghosh**

🌐 **Repository:** https://github.com/Arghyadevs/CampusSite.git

📧 **For questions:** Open an issue on GitHub

---

<div align="center">
  <sub>Built for AWS Campus Project 🎓</sub>
</div>
</div>


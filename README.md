# Amresh Bhuyan - Portfolio Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 🌐 Live Website
**URL:** [https://mehroz-akthar.web.app](https://mehroz-akthar.web.app)

## 📱 Website Pages
- **Home:** `/` - Landing page with introduction
- **About:** `/about` - Personal and professional background
- **Services:** `/services` - Offered services and expertise
- **Skills:** `/skills` - Technical and professional skills
- **Projects:** `/projects` - Portfolio of work and contributions
- **Contact:** `/contact` - Get in touch

## 🚀 Tech Stack

### Frontend
```javascript
{
  "framework": "React 18",
  "language": "TypeScript",
  "ui-library": "Material-UI (MUI)",
  "routing": "React Router DOM v6",
  "state-management": "React Hooks",
  "lazy-loading": "React.lazy() + Suspense",
  "seo": "React Helmet",
  "styling": "CSS Modules + MUI sx"
}
```

### Deployment & Hosting
```javascript
{
  "hosting": "Firebase Hosting",
  "domain": "amresh.aediax.com",
  "ssl": "Automatic by Firebase",
  "cdn": "Firebase CDN",
  "build-tool": "Create React App"
}
```

### Features Implemented
- ✅ Responsive Design (Mobile First)
- ✅ SEO Optimization
- ✅ XML Sitemap Generation
- ✅ Meta Tags & Open Graph
- ✅ Lazy Loading for Performance
- ✅ 404 Error Page
- ✅ Contact Form Integration
- ✅ Social Media Integration

## 📁 Project Structure

```bash
mehroz-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── PageSkeleton.jsx
│   │   └── SitemapReference.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   ├── Home.module.css
│   │   ├── About.module.css
│   │   ├── Services.module.css
│   │   ├── Skills.module.css
│   │   ├── Projects.module.css
│   │   ├── Contact.module.css
│   │   └── NotFound.module.css
│   ├── App.js
│   └── index.js
├── scripts/
│   ├── generate-sitemap.js
│   └── submit-sitemap.js
├── firebase.json
├── package.json
└── README.md
```

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/mehrozakthar14/Mehroz-React.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create `.env` file:
```env
REACT_APP_SITE_URL= https://mehroz-akthar.web.app
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4. Run Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase
```bash
# Login to Firebase
firebase login

# Initialize Firebase (first time only)
firebase init

# Deploy
firebase deploy

# Or use npm script
npm run deploy
```

## 📊 SEO Configuration

### Meta Tags in `index.html`
```html
<title>Mehroz Akthar | Software Developer | AediaX</title>
<meta name="description" content="Mehroz Akthar is a  Software Engineer,  AediaX Tech Private Limited." />
<meta property="og:title" content="Mehroz Akthar | Software Developer | AediaX" />
<meta property="og:url" content="https://mehroz-akthar.web.app" />
<meta property="og:image" content=" https://mehroz-akthar.web.app/og-image.png" />
```
git add
### XML Sitemap Generation
Automatically generated during build:
```bash
npm run build
# Generates: /build/sitemap.xml
```

### Submit to Search Engines
```bash
npm run submit:sitemap
```

## 🎨 Design System

### Color Palette
```css
{
  primary: "#0a1a2f",     /* Dark Blue Background */
  secondary: "#42a5f5",   /* Light Blue Accent */
  accent: "#667eea",      /* Gradient Start */
  text-primary: "#ffffff",
  text-secondary: "#b0b7c3"
}
```

### Typography
- **Primary Font:** Roboto (Material-UI default)
- **Headings:** 600 weight
- **Body:** 400 weight, 1.6 line-height

## 📈 Performance Optimization

### Implemented Features
1. **Code Splitting** - Lazy loaded page components
2. **Image Optimization** - Proper sizing and formats
3. **Caching Strategy** - Firebase headers configuration
4. **Minification** - Production build optimization
5. **Tree Shaking** - Remove unused code

### Lighthouse Scores Target
- ⚡ Performance: 95+
- 🔍 SEO: 100
- 📱 Accessibility: 100
- 🛠️ Best Practices: 100

## 🔗 Important Links

```



## 🛠️ Available Scripts

```json
{
  "start": "react-scripts start",
  "build": "react-scripts build && node scripts/generate-sitemap.js",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "generate:sitemap": "node scripts/generate-sitemap.js",
  "submit:sitemap": "node scripts/submit-sitemap.js",
  "predeploy": "npm run build",
  "deploy": "firebase deploy"
}
```

## 📝 License

This project is proprietary and owned by Amresh Bhuyan. All rights reserved.

## 🤝 Contact

For any queries or collaborations:



---

*Last Updated: January 2024*  
*Built with ❤️ using React & Firebase*

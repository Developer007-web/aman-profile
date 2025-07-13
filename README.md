# Frontend Developer Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS for a frontend developer from Chandigarh University.

## 🌐 Live Website

**Deployed URL:** https://nijkbgtn.manus.space

## ✨ Features

### Core Sections
- **Hero Section**: Eye-catching introduction with professional background image
- **About Me**: Personal introduction, education details, and interests
- **Skills & Technologies**: Interactive skill bars showing proficiency levels
- **Featured Projects**: Showcase of key projects with descriptions and tech stacks
- **Experience**: Professional journey and work history
- **Contact**: Functional contact form with validation and social media links

### Technical Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Sticky navigation with smooth scrolling to sections
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Contact Form**: Fully functional form with validation and success feedback
- **Modern UI**: Clean, professional design with consistent styling
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Technologies Used

### Frontend Framework
- **React.js 18.3.1**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Custom CSS**: Additional styling for animations and effects
- **Lucide React**: Beautiful, customizable icons

### Development Tools
- **TypeScript**: Type-safe JavaScript development
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefixing

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── hero-bg.jpg    # Hero section background
│   │   ├── profile-placeholder.jpg
│   │   ├── project-1.jpg  # Project showcase images
│   │   └── project-2.jpg
│   ├── components/
│   │   └── ui/            # Reusable UI components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── badge.jsx
│   │       ├── input.jsx
│   │       └── textarea.jsx
│   ├── lib/
│   │   └── utils.js       # Utility functions
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles and Tailwind imports
│   └── main.jsx           # Application entry point
├── dist/                  # Production build output
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite build configuration
└── README.md              # This documentation file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation
1. Clone or download the project files
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

### Development
Start the development server:
```bash
pnpm run dev
```
The website will be available at `http://localhost:5173`

### Production Build
Build the project for production:
```bash
pnpm run build
```
The built files will be in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
pnpm run preview
```

## 🎨 Customization Guide

### Personal Information
Update the following in `src/App.jsx`:
- Name and title in the hero section
- About me content and personal details
- Education information
- Contact information (email, phone, location)
- Social media links

### Skills & Technologies
Modify the `skills` array in `src/App.jsx`:
```javascript
const skills = [
  { name: 'Your Skill', level: 90, icon: <YourIcon className="w-5 h-5" /> },
  // Add more skills...
]
```

### Projects
Update the `projects` array in `src/App.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    image: yourProjectImage,
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    liveUrl: 'https://your-project-url.com',
    githubUrl: 'https://github.com/your-username/project'
  },
  // Add more projects...
]
```

### Experience
Modify the `experiences` array in `src/App.jsx`:
```javascript
const experiences = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start - End Date',
    description: 'Job description...'
  },
  // Add more experiences...
]
```

### Images
Replace the images in `src/assets/` with your own:
- `hero-bg.jpg`: Background image for the hero section
- `profile-placeholder.jpg`: Your profile photo
- `project-1.jpg`, `project-2.jpg`: Screenshots of your projects

### Colors & Styling
Customize the color scheme in `src/index.css` by modifying the CSS custom properties:
```css
:root {
  --primary: your-primary-color;
  --secondary: your-secondary-color;
  /* Add more color customizations */
}
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

Key responsive features:
- Flexible grid layouts
- Scalable typography
- Touch-friendly navigation
- Optimized images for different screen sizes

## 🔧 Contact Form

The contact form includes:
- **Name field**: Required text input
- **Email field**: Required email validation
- **Message field**: Required textarea
- **Form validation**: Client-side validation with error handling
- **Success feedback**: Alert message on successful submission

To integrate with a backend service:
1. Update the `handleSubmit` function in `src/App.jsx`
2. Replace the alert with actual form submission logic
3. Add your preferred backend service (e.g., Formspree, Netlify Forms, or custom API)

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for description and keywords
- Open Graph tags for social media sharing
- Proper heading hierarchy
- Alt text for images
- Clean, descriptive URLs

## 🚀 Deployment

The website is deployed using Manus deployment service and is accessible at:
**https://nijkbgtn.manus.space**

For deploying to other platforms:
1. Build the project: `pnpm run build`
2. Upload the `dist/` folder to your hosting service
3. Configure your hosting service to serve the `index.html` file

Popular deployment options:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📄 License

This project is created for educational and portfolio purposes. Feel free to use it as a template for your own portfolio website.

## 🤝 Support

For any questions or support regarding this portfolio website, please feel free to reach out through the contact form on the website or via the provided contact information.

---

**Built with ❤️ using React.js and Tailwind CSS**


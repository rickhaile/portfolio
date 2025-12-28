# Rick's Portfolio Website

A modern, responsive developer portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern dark mode aesthetic
- 🎨 Glassmorphism effects and gradients
- 🚀 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 SEO optimized
- 📧 Contact form with validation

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit the following files to add your personal information:

- **Hero Section**: `components/sections/Hero.tsx` - Update your name and title
- **About Section**: `components/sections/About.tsx` - Add your bio and skills
- **Projects Section**: `components/sections/Projects.tsx` - Replace sample projects with your actual projects
- **Contact**: Update social links in `components/layout/Footer.tsx`

### Projects

To add your projects, edit the `projects` array in `components/sections/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['React', 'Node.js', 'etc'],
    githubUrl: 'https://github.com/yourusername/repo',
    liveUrl: 'https://yourproject.com',
    imageUrl: '/images/project.png', // optional
  },
  // Add more projects...
];
```

### Contact Form

The contact form is currently client-side only. To enable actual email sending:

1. Choose an email service (EmailJS, SendGrid, Resend, etc.)
2. Create an API route in `app/api/contact/route.ts`
3. Update the form submission handler in `components/sections/Contact.tsx`

### Colors and Styling

Customize the color scheme in `tailwind.config.ts`:

- Background colors
- Primary/accent colors
- Typography
- Animations

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main home page
│   └── globals.css      # Global styles
├── components/
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── ui/              # Reusable UI components
│   └── layout/          # Layout components (Header, Footer)
├── lib/
│   └── types.ts         # TypeScript interfaces
└── public/              # Static assets

```

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Created by Rick - Template free to use and customize.

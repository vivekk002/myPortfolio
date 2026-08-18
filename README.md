# Vivek Kumar's Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, Material UI, and AOS.

Live site: [vivekkumar.space](https://vivekkumar.space)

## Features

- Responsive layout with light and dark themes that respect system preference and persist the visitor's choice.
- Accessible keyboard navigation, skip link, mobile menu focus management, and reduced-motion support.
- Project, experience, education, skills, resume, and contact sections.
- EmailJS contact form configured through environment variables.

## Local development

```bash
git clone https://github.com/vivekk002/myPortfolio.git
cd myPortfolio
npm install
copy .env.example .env
npm run dev
```

On macOS or Linux, use `cp .env.example .env` instead. Add your EmailJS values to `.env` before testing the contact form:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

For deployment, configure the same variables in the hosting provider's environment settings. Restrict the EmailJS public key to your deployed domain and enable its available anti-abuse protections.

## Commands

```bash
npm run dev      # Start the development server
npm run lint     # Check source quality
npm run build    # Create a production build
npm run preview  # Preview the production build
```

## Tech stack

- React 18 and Vite
- Tailwind CSS and Material UI
- AOS for scroll-triggered animation
- EmailJS for contact delivery

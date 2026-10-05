# Tulas International School — Homepage Redesign

A modern, responsive homepage redesign for **Tulas International School**, built as part of a frontend development assessment.

I redesigned the homepage with a premium editorial-style interface while keeping the school's educational identity, green/gold color direction, and important information at the center of the experience.

## Live Demo

https://tis-homepage-redesign-ashy.vercel.app/

## GitHub Repository

https://github.com/Harikrishna1408-nxtwave/tis-homepage-redesign

---

## About the Project

I developed this homepage from scratch using Next.js, TypeScript, Tailwind CSS and Framer Motion.

My main goal was to create a website that feels:

- Modern
- Premium
- Responsive
- Easy to navigate
- Visually engaging
- Conversion-focused
- Suitable for a professional school website

I focused on creating strong visual hierarchy, smooth interactions, responsive layouts and reusable components instead of building the page as one large component.

---

## Key Features

### Custom Cursor

I implemented a custom animated cursor for desktop users.

The cursor smoothly follows the mouse using Framer Motion and expands when hovering over interactive elements such as links and buttons.

### Scroll Progress

I added a scroll progress indicator at the top of the page so users can understand their position within the homepage.

### Scroll Reveal Animations

Sections and content cards animate into view as the user scrolls through the page.

I used Framer Motion with viewport-based animations so the effects remain subtle and do not overwhelm the content.

### Responsive Navigation

The navigation adapts to different screen sizes.

On desktop, it displays the main navigation and Apply Now CTA.

On smaller screens, it switches to a mobile menu.

The navbar also changes appearance when the user scrolls, improving readability over light sections.

### Responsive Design

I designed and tested the homepage across:

- 375px mobile
- 768px tablet
- 1280px desktop

The layouts, typography, navigation, cards and spacing adapt to different screen sizes.

### Interactive Sports Cards

The sports section uses image-based cards with:

- Hover movement
- Image zoom
- Gradient overlays
- Animated content
- Responsive grid layout

### Conversion-focused Admissions Section

The homepage ends with a strong admissions CTA designed to encourage visitors to explore the school's admission process.

---

## Sections

The homepage includes:

1. Hero
2. School Statistics
3. About Tulas
4. Academics
5. Life at Tulas
6. Sports
7. Why Tulas
8. Campus
9. Tulas Experience
10. Recognition
11. Admissions
12. Footer

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Animation

- Framer Motion

### Icons

- Lucide React

### Image Optimization

- Next.js Image

### Deployment

- Vercel

### Version Control

- Git
- GitHub

---

## Project Structure

```text
tis-homepage-redesign/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── animation/
│   │   ├── CustomCursor.tsx
│   │   ├── Reveal.tsx
│   │   └── ScrollProgress.tsx
│   │
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── Admissions.tsx
│   │   ├── Awards.tsx
│   │   ├── Campus.tsx
│   │   ├── Experiences.tsx
│   │   ├── Hero.tsx
│   │   ├── Sports.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyTis.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       └── SectionHeading.tsx
│
├── data/
│   └── siteData.ts
│
├── public/
│
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

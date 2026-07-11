# Portfolio Website Design Document

## Overview

A modern, premium, interactive developer portfolio that showcases my experience as a Software Engineer.

The website should feel polished, minimal, futuristic, and smooth without becoming distracting.

The design should combine elegant UI with subtle 3D animations powered by Three.js.

The entire website should emphasize motion, depth, and responsiveness.

---

# Tech Stack

- Vite
- React
- TypeScript
- TailwindCSS
- shadcn/ui
- Three.js
- React Three Fiber
- Drei
- Framer Motion
- Lucide React Icons

---

# Design Philosophy

Keywords:

- Modern
- Premium
- Minimal
- Interactive
- Smooth
- Clean
- Professional
- Slight futuristic feeling

Avoid:

- Glassmorphism everywhere
- Heavy neon
- Overly colorful gradients
- Clutter
- Slow animations

The UI should resemble portfolios from:

- Linear
- Vercel
- Framer
- Apple
- Figma

---

# Color Theme

Must support:

- Light mode
- Dark mode

Use CSS variables via shadcn.

### Primary

Blue

### Accent

Purple

### Success

Emerald

### Neutral

Slate

Dark mode should use deep charcoal instead of pure black.

---

# Typography

Font:

Inter

Heading:

Bold

Body:

Medium

Large whitespace.

---

# Layout

Single page portfolio.

Sticky navigation bar.

Smooth scrolling.

Section transitions using Framer Motion.

Navigation items:

- Overview
- Education
- Work Experience
- Projects
- Achievements
- Contact

Navigation highlights current section.

---

# Hero / Overview

Fullscreen landing section.

Contains:

- Name
- Software Engineer
- Short introduction
- Resume button
- Contact button

Background:

Three.js animated scene.

Ideas:

- Floating particles
- Floating technology icons
- Rotating wireframe sphere
- Animated grid
- Subtle stars

The animation should continuously move.

Not static.

---

# Technology Animation

One of the key visual elements.

Around the hero section, continuously animate floating technology icons.

Examples:

React

TypeScript

Java

Python

Node.js

C#

Azure

Docker

Git

TailwindCSS

Each icon should:

- float
- rotate slowly
- slightly bob up and down
- never overlap
- respond slightly to mouse movement

Animation must remain lightweight.

---

# About Summary

A short professional summary.

Cards showing:

Years of experience

Projects completed

Awards

Technologies

Use animated counters.

---

# Education

Vertical timeline.

Each education entry contains:

School

Degree

Duration

Description

Reveal animation while scrolling.

---

# Work Experience

Timeline cards.

Each includes:

Company

Position

Duration

Responsibilities

Technologies used.

Cards slightly elevate on hover.

---

# Projects

Responsive grid.

Each project displayed as a premium card.

Card contains:

Project image

Project title

Technology badges

Short description

Hover animation.

Entire card is clickable.

Clicking opens a Dialog (shadcn).

Dialog contains:

Project image

Project title

Detailed description

Technology list

Features

Github button

Close button

Github icon should navigate to repository.

The dialog should animate smoothly.

---

# Achievements

Timeline or cards.

Each achievement includes:

Title

Organization

Date

Description

Examples:

Best Project Award

Dean's List

Hackathon

Certificates

Cards animate into view.

---

# Contact

Professional contact section.

Contains:

Email

LinkedIn

GitHub

Location

Resume download

Optional contact form.

Icons have hover animations.

---

# Footer

Simple.

Contains:

Copyright

Built with React + Three.js

Social links.

---

# Animations

Use Framer Motion.

All sections should:

Fade

Slide

Scale slightly

Cards:

Hover lift

Shadow increase

Buttons:

Ripple

Scale

Icons:

Continuous float

Hero:

Background slowly moving

Technology icons orbit slightly.

---

# Three.js Requirements

Use React Three Fiber.

Include:

Animated particles

Floating icons

Moving lights

Mouse parallax

Soft lighting

Responsive canvas

Performance optimized.

Maintain 60fps.

---

# Responsive

Desktop

Tablet

Mobile

Navigation collapses into hamburger menu.

Project grid becomes one column on mobile.

Three.js canvas scales correctly.

---

# Accessibility

Keyboard navigation.

Good color contrast.

Focus rings.

ARIA labels.

Reduced motion support.

---

# Performance

Lazy load heavy components.

Code splitting.

Memoize expensive renders.

Avoid unnecessary re-renders.

Use optimized animations.

---

# File Structure

src/

components/

Hero

Navbar

Education

Experience

Projects

Achievements

Contact

Footer

ThreeScene

ProjectDialog

TechIconCloud

sections/

hooks/

lib/

types/

assets/

styles/

---

# Data Structure

Projects should come from a separate data file.

Example:

Project

Title

Description

Long Description

Image

Github URL

Technologies

Features

Likewise:

Education

Experience

Achievements

Should all come from TypeScript data files.

This allows future maintenance without touching UI components.

---

# Nice-to-Have

Animated loading screen.

Dark/light mode toggle.

Back-to-top button.

Cursor glow effect.

Section progress indicator.

Scroll progress bar.

Page transition animation.

Background ambient gradient.

Animated blob behind hero.

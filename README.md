# Interactive 3D Developer Portfolio

A premium, interactive developer portfolio website built to showcase projects, experience, and academic achievements. Features an interactive 3D particle background, modern typography, responsive layout, smooth custom scrollbars, and seamless email sending.

Designed and developed by **Yeoh Han Yi**.

## 🚀 Live Demo & Repository
- **GitHub**: [github.com/Foreen03](https://github.com/Foreen03)
- **LinkedIn**: [linkedin.com/in/yeoh-han-yi-6a4765160](https://www.linkedin.com/in/yeoh-han-yi-6a4765160)

---

## ✨ Features

- **Interactive 3D Particles & Camera Rig**: Implements a high-performance interactive particle canvas and floating tech icon cloud built with `@react-three/fiber` and `@react-three/drei` that responds dynamically to mouse movement.
- **Custom Global Scrollbar**: Implemented globally using the Radix/Shadcn `ScrollArea` component, ensuring consistent styling across all platforms and support for smooth anchor navigations.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens with glassmorphism overlays and tailored color palettes for both dark and light modes.
- **Dynamic Projects Modal & Carousel**: Custom dialogs for projects featuring embla-based autoplaying image carousels, detailed technology badges, and clean feature checklists.
- **Contact Form with EmailJS & Sonner**: Uses EmailJS to deliver submissions directly to your email inbox, with real-time feedback using top-middle Sonner toasts.
- **Micro-Animations**: Uses `Framer Motion` for smooth fade-ins, spring-based tab indicators, hover translation, and shadow effects on interactive cards.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) via [React Three Fiber](https://r3f.docs.pmnd.rs/) & [Drei](https://github.com/pmndrs/drei)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix Primitives)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js installed (v18+ recommended).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Foreen03/Portfolio.git
   cd Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Configuration
Create a `.env` file in the root of the project to configure your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### Run Locally
Launch the local development server:
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Build for Production
To bundle the application for production deployment:
```bash
npm run build
```
This generates optimized static files in the `dist` directory.

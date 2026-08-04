# Portfolio

My personal portfolio site — built with React and Vite, styled with Tailwind CSS, and animated with GSAP and Framer Motion. It has a desktop experience with a snap-scrolling, multi-section layout and a separate mobile view, plus a dedicated résumé page.

## Live Demo

https://dvyuh.github.io/Portfolio/

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP (`@gsap/react`, `ScrollToPlugin`), Framer Motion
- **Cursor effects:** `@cursorify/react`
- **Routing:** React Router v7 (`react-router-dom`, `react-router-hash-link`)
- **Linting:** ESLint
- **Deployment:** GitHub Pages (via `gh-pages`)

## Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── Components/
│   │   ├── CasestudyPage.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Hero.jsx
│   │   ├── Me.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectPage.jsx
│   │   └── SidequestPage.jsx
│   ├── MobileView/
│   │   └── MobileHome.jsx
│   ├── Pages/
│   │   └── resume.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/dvyuh/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

This starts the Vite dev server with hot module replacement.

### Build

```bash
npm run build
```

Outputs a production build to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Lint

```bash
npm run lint
```

### Deploy

```bash
npm run deploy
```

Builds the project and publishes `dist/` to GitHub Pages via `gh-pages`.

## Routing

| Route      | Component                          |
|------------|-------------------------------------|
| `/`        | Desktop or mobile home (responsive) |
| `/resume`  | Résumé page                         |

The app detects viewport width on load and on resize to switch between the desktop snap-scroll layout and the mobile home view.

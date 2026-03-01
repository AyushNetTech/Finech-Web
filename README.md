# Finech – Financial APIs Frontend Application

## Project Overview

This project is a frontend application developed as part of a **Frontend Development Assignment**.  
The goal of the assignment is to translate a provided **Figma design** into a **production-ready, responsive web application** using **React.js, Next.js, and Tailwind CSS**.

The implementation closely follows the Figma design in terms of layout, spacing, typography, colors, and component structure. The project emphasizes clean code, reusable components, and modern frontend best practices.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI Library:** React.js
- **Styling:** Tailwind CSS
- **Package Manager:** npm
- **Version Control:** Git
- **Repository Hosting:** GitHub

No additional UI frameworks or component libraries were used.

---

## Setup Instructions

### Prerequisites
Ensure the following are installed on your system:
- Node.js (LTS version recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd finech-web
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## How to Run the Project Locally

Start the development server using:
```bash
npm run dev
```

The application will be available at:
```
http://localhost:3000
```

The project should run without errors on a clean environment.

---

## Folder Structure Explanation

```
project-root/
│
├── app/                    # Next.js app router pages
│   ├── page.tsx            # Home page
│   ├── pricing/page.tsx    # Pricing page
│   └── layout.tsx          # Root layout
│
├── components/             # Reusable UI components
│   ├── layout/             # Layout components (Navbar, etc.)
│   └── sections/           # Page sections (Hero, Features, etc.)
│
├── public/                 # Static assets (images, logos)
│
├── styles/                 # Global styles
│
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

The project is structured to ensure scalability, readability, and component reusability.

---

## Assumptions and Trade-offs

- Minor visual adjustments were made where exact pixel values were not explicitly defined in the Figma design.
- Desktop-first approach was followed, with responsive behavior implemented for tablet and mobile screens.
- Accessibility best practices (semantic HTML and readable contrast) were applied where applicable, though no dedicated accessibility library was used.
- State management is handled using React hooks; no external state management library was introduced as it was not required.

---

## Notes

- The UI closely follows the provided Figma design.
- All components were built from scratch using Tailwind CSS.
- The repository uses meaningful commit messages and a clean commit history.
- This project is intended for evaluation and assignment purposes.

---

## Optional

If deployed, the live URL can be added here:
```
https://finech-web.vercel.app/
```

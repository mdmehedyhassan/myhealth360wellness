/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('daisyui'),
  ],
  theme: {
    extend: {
      colors:{
        white:"var( --color-white)",
        black:"var(--color-black)",        
        primary:"var(--color-primary)",
        primaryAccent:"var(--color-primary-accent)",
        secondary:"var(--color-secondary)",
        bgPrimary:"var(--color-bg-primary)",
        bgSecondary:"var(--color-bg-secondary)",
        textPrimary:"var(--color-text-primary)",
        textSecondary:"var(--color-text-secondary)",
        borderPrimary:"var(--color-border-primary)",
        borderSecondary:"var(--color-border-secondary)",
      }
    },
  },
}

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
        primary:"var(--color-primary)",
        secondary:"var(--color-secondary)",
        bgPrimary:"var(--color-bg-primary)",
        textPrimary:"var(--color-text-primary)",
        textSecondary:"var(--color-text-secondary)",
        textBase:"var(--color-text-base)",
        borderPrimary:"var(--color-border)",
      }
    },
  },
}

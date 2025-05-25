/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary, #DB2777)", // Pink-600 as default
        "primary-hover": "var(--color-primary-hover, #BE185D)", // Pink-700
        secondary: "var(--color-secondary, #4B5563)", // Gray-600
        light: "var(--color-light, #F9FAFB)", // Gray-50
        dark: "var(--color-dark, #1F2937)", // Gray-800
        accent: "var(--color-accent, #EC4899)", // Pink-500
      },
      spacing: {
        section: "var(--spacing-section, 4rem)",
      },
      borderRadius: {
        container: "var(--border-radius-container, 0.75rem)", // 12px
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

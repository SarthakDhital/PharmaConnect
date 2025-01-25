import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sereneBlue: {
          50: '#f5faff',  // Lightest blue
          100: '#e0f1ff', // Extra light blue
          200: '#b3dcff', // Light blue
          300: '#80c7ff', // Soft blue
          400: '#4db3ff', // Calm blue
          500: '#1a9fff', // Serene blue (primary)
          600: '#1580cc', // Deep serene blue
          700: '#116199', // Deeper serene blue
          800: '#0c4266', // Dark serene blue
          900: '#082233', // Deepest serene blue
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

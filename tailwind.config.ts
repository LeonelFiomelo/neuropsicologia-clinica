import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'neuronas': "url(/neuronas.jpeg)"
      },
      keyframes: {
        'reveal-left-to-right-smoothest': {
          '0%': { 'clip-path': 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { 'clip-path': 'inset(0 0 0 0)', opacity: '1' },
        },
      },
      animation: {
        'reveal-left-to-right-smoothest': 'reveal-left-to-right-smoothest 1.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;

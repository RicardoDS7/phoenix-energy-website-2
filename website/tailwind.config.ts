import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      
      colors: {
        charcoal: '#2b4147ff',
        paynesGray: '#4c7380ff',
        paynesGrayOverlay: 'rgba(76, 115, 128, 0.7)',
        paynesGrayHighlight: '#557F8D',
        airSuperiorityBlue: '#769ab0ff',
        powderBlue: '#97b3c4ff',
        colombiaBlue: '#C5D5DE',
        antiflashWhite: 'rgba(245, 245, 245, 1)',
        atomicTangerine: '#ffa07a', /**Accent Color**/
      },
    },
  },
  plugins: [],
};
export default config;

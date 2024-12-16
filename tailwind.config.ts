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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        // Extra small devices (phones, less than 640px)
        'xs': '480px',
        
        // Small devices (landscape phones, 640px and up)
        'sm': '640px',
        
        // Medium devices (tablets, 768px and up)
        'md': '768px',
        
        // Large devices (desktops, 1024px and up)
        'lg': '1024px',
        
        // Extra large devices (large desktops, 1280px and up)
        'xl': '1280px',
        
        // 2X Large devices (very large desktops, 1536px and up)
        '2xl': '1536px',
        
        // Additional custom breakpoints if needed
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
} satisfies Config;
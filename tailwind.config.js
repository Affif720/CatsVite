/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/style.css",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': {'min': '280px', 'max': '374px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'sm': {'min': '375px', 'max': '719px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
    
      'md': {'min': '720px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    
      'lg': {'min': '1024px', 'max': '2000px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    
    },
    // fontSize: {
    //   xs: ['10px', '12px'],
    //   sm: ['14px', '16px'],
    //   base: ['18px', '20px'],
    //   lg: ['20px', '24px'],
    //   xl: ['24px', '26px'],
    //   '2xl': ['26px', '28px'],
    //   '3xl': ['30px', '32px'],
    //   '4xl': ['34px', '36px'],
    //   '5xl': ['38px', '40px'],
    // },
    extend: {
      colors: {
        primary: 'rgb(34 197 94)',
      }
    },

  },
  plugins: [],
}


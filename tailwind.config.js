/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.js"
  ],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('flowbite')
  ],
  darkMode: false,
}


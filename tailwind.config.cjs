/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1877f2',
        primaryhover: '#1670e7',
        secondary: '#42b72a',
        secondaryhover: '#37a621'
      }
    },
    plugins: []
  }
}

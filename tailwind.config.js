/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1877f2',
        primaryhover: '#1670e7',
        secondary: '#42b72a',
        secondaryhover: '#37a621',
        bgcolor: '#f0f2f5',
      },
    },
  },
  plugins: [],
}

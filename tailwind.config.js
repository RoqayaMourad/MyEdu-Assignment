/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    'peer',
    'peer-checked',
    'fill-purple-700',
  ],
  theme: {
    extend: {
      backgroundImage: {
        discover: "url('./assets/box-bg.png')", // Replace with your actual image path
      },
    },
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
    },
  },
  plugins: [],
};
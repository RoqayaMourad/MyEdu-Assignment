/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  safelist: [
    'peer',
    'peer-checked',
    'fill-purple-700',
  ],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
    },
  },
  plugins: [],
};
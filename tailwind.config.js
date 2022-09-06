/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'social-blue': 'var(--ifm-color-primary)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

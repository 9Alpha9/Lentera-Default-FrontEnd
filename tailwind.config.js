/** @type {import('tailwindcss').Config} */
module.exports = {
  //Initialize Tailwindcss On Resources laravel folder
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

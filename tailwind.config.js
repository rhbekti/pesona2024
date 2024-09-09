const flowbite = require("flowbite-react/tailwind")
const safeArea = require("tailwindcss-safe-area")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), safeArea],
}

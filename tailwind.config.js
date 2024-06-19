/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [],
  safelist: [
    "text-blue-500",
    "text-red-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-blue-700",
    "bg-red-700",
    "bg-green-700",
    "bg-yellow-700",
    "bg-purple-700",
    "bg-blue-200",
    "bg-red-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "text-blue-700",
    "text-red-700",
    "text-green-700",
    "text-yellow-700",
    "text-purple-700",
  ]
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        "strong-cyan": "#26baa4",
        "strong-darker-cyan": "#1f9987",
        "light-blue": "#6173ff",
        "darker-blue": "#4b5acc",
        "dark-grayish-blue": "#4c545d",
        "grayish-blue": "#9fabb2",
      },

      fontFamily: {
        "Bai-Jamjuree": ["Bai Jamjuree", "sans-serif"]
      },
    },
  },
  plugins: [],
}

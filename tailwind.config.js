module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      theme: {
        screens: {
          sm: "480px",
          md: "768px",
          lg: "976px",
          xl: "1440px",
        },
        colors: {
          blue: "#1fb6ff",
          pink: "#ff49db",
          orange: "#ff7849",
          green: "#13ce66",
          "gray-dark": "#273444",
          gray: "#8492a6",
          "gray-light": "#d3dce6",
          red: "#fff",
          primary: "darkblue",
          secondary: "red",
        },
        fontFamily: {
          sans: ["Graphik", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
        extend: {
          backgroundColor: {
            "multiselect-option": "red-200",
          },
          spacing: {
            128: "32rem",
            144: "36rem",
          },
          borderRadius: {
            "4xl": "2rem",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

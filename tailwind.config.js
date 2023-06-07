export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom theme under the 'extend' section
      themes: {
        mytheme: {
          primary: "#87f2c5",
          secondary: "#fccebd",
          accent: "#db9469",
          neutral: "#212c35",
          "base-100": "#ffffff",
          info: "#425fd7",
          success: "#209255",
          warning: "#956a04",
          error: "#f55c70",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#87f2c5",

          "secondary": "#fccebd",

          "accent": "#db9469",

          "neutral": "#212c35",

          "base-100": "#ffffff",

          "info": "#425fd7",

          "success": "#209255",

          "warning": "#956a04",

          "error": "#f55c70",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};



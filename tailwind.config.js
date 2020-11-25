module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx}",
    "./src/shared/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    themeVariants: ["dark"],
    screens: {
      phone: { max: "37.5em" },
      "tab-port": { max: "56.25em" },
      "tab-land": { max: "75em" },
      large: { max: "112.5em" },
    },
    extend: {
      fontFamily: {
        vazir: ["Vazir", "system-ui"],
      },
      colors: {
        "primary-light-color": "#3784ff",
        "primary-light-hover-color": "#2360c2",
        "secondary-light-color": "rgb(255,228,219)",
        "secondary-light-hover-color": "rgb(255,120,75)",
        "secondary-dark-color": "rgb(255,120,75)",
        "black-light": "#262335",
      },
    },
  },
  variants: {},
  plugins: [],
};

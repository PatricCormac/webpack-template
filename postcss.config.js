module.exports = {
  plugins: [
    require("autoprefixer"),
    require("css-mqpacker"),
    require("cssnano")({
      preset: [
        "default",
        {
          descardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};

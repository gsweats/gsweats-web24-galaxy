// https://prettier.io/docs/en/configuration.html

/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  // Usually I roll with 4 but this code is 2-space based, #frontends, lol ;)
  "tabWidth": 2
};

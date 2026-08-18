/** @type {import("lint-staged").Configuration} */
const config = {
  "*.{js,jsx,ts,tsx,mjs,cjs}": ["prettier --write", "eslint --fix"],
  "*.{css,json,md,yaml,yml}": "prettier --write",
};

export default config;

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "simple-import-sort"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prefer-stateless-function": "off",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "off",
    "no-irregular-whitespace": "off",
    "no-unused-vars": "off",
    indent: "off",
    "linebreak-style": "off",
    semi: ["error", "always"],
    "eol-last": ["error", "always"],
    quotes: ["error", "double"],
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};

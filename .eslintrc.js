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
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
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
    indent: ["error", 2, { SwitchCase: 1 }],
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
  },
};

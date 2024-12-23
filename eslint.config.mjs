import eslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"], // Target TypeScript files
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      prettier: eslintPluginPrettier,
      "@typescript-eslint": eslintPlugin,
    },
    rules: {
      "object-curly-spacing": [
        "error",
        "always", // Use "never" if you want no spaces
        { imports: false }, // Skip applying this rule to imports
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "off", // Or 'error' for stricter enforcement
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_", // Ignore variables prefixed with '_'
        },
      ],
      "prettier/prettier": "error", // Treat Prettier formatting issues as errors
      ...eslintConfigPrettier.rules, // Ensure Prettier rules are respected
    },
  },
];

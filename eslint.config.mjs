import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";

export default tseslint.config(
  {
    ignores: [
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
      "dist/**",
      "coverage/**",
    ],
  },

  {
    // Lint all project typescript files
    files: ["**/*.ts"],

    extends: [
      ...tseslint.configs.recommended,
    ],

    plugins: {
      playwright,
    },

    rules: {
      ...playwright.configs["flat/recommended"].rules,

      // TypeScript safety (non-type-aware safe rules)
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      // IMPORTANT: avoid async friction in Playwright
      // (we intentionally DO NOT enable no-floating-promises)

      // Playwright best practices
      "playwright/missing-playwright-await": "error",
      "playwright/no-focused-test": "error",
      "playwright/no-page-pause": "error",
      "playwright/no-skipped-test": "error",
      "playwright/no-wait-for-timeout": "error",
      "playwright/prefer-web-first-assertions": "error",

      // Playwright style
      "playwright/prefer-to-be": "error",
      "playwright/prefer-to-contain": "error",
      "playwright/prefer-hooks-in-order": "error",

      // General hygiene
      "no-console": "warn",
      "no-debugger": "error",
      "prefer-const": "error",

    },
  }
);

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({resolvePluginsRelativeTo: import.meta.dirname});

/**
 * @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray}
 */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    }
  },
  {
    rules: {
      "semi": "error",
    }
  }
];
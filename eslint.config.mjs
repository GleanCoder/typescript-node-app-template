import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.node },
    },
    tseslint.configs.recommended,

    {
        ignores: [
            "dist/**/*",
            "node_modules/**/*",
            "build/**/*",
            "public/**/*",
            "eslint.config.mjs",
        ],
    },
    {
        rules: {
            "no-unused-vars": "error",
            "no-var": "error",
            "no-console": "warn",
        },
    },
]);

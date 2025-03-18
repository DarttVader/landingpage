import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    eslint: { extends: ["eslint:recommended"] },
    typescript: { extends: ["plugin:@typescript-eslint/recommended"] },
    next: { extends: ["next/core-web-vitals", "next/typescript"] },
  },
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

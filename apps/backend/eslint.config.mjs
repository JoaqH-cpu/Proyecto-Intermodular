import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: [".medusa/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // medusa-config.ts usa module.exports, como el starter oficial.
    files: ["medusa-config.ts"],
    languageOptions: { globals: { module: "writable", process: "readonly" } },
  },
);

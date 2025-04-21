import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReactPlugin from "eslint-plugin-react";
import eslintReactHooksPlugin from "eslint-plugin-react-hooks";
import eslintReactRefreshPlugin from "eslint-plugin-react-refresh";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": eslintReactHooksPlugin,
      react: eslintReactPlugin,
      "react-refresh": eslintReactRefreshPlugin,
      prettier: prettierPlugin,
      jsxA11y: jsxA11yPlugin,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11yPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: { project: ["./tsconfig.json"] },
    },
  },
  { ignores: ["node_modules", "dist"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "import/no-unresolved": "error",
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/alt-text": "off",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to", "hrefLeft", "hrefRight"],
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],
      "react/jsx-curly-newline": [
        "error",
        {
          multiline: "consistent",
          singleline: "consistent",
        },
      ],
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "react/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "ignore",
        },
      ],
      "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
        },
      ],
      "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/state-in-constructor": "off",
      "react/jsx-filename-extension": "off",
      "react/jsx-max-depth": ["error", { max: 1 }],
      "react/no-array-index-key": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-closing-bracket-location": [1, "tag-aligned"],
      "no-array-constructor": "error",
      "prefer-destructuring": [
        "error",
        {
          array: true,
          object: true,
        },
      ],
      "object-curly-spacing": ["error", "always"],
      "object-property-newline": ["error", { allowMultiplePropertiesPerLine: false }],
      indent: ["error", 2, { SwitchCase: 1 }],
      "array-element-newline": ["error", "consistent"],
      "array-bracket-newline": ["error", "consistent"],
      "object-curly-newline": [
        "error",
        {
          multiline: true,
          consistent: true,
        },
      ],
      "key-spacing": [
        "error",
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      "comma-dangle": ["error", "always-multiline"],
      "array-callback-return": "error",
      "array-bracket-spacing": ["error", "never"],
      "object-shorthand": ["error", "always"],
      "quote-props": ["error", "as-needed"],
      quotes: ["error", "double", { allowTemplateLiterals: false }],
      "no-template-curly-in-string": "error",
      "prefer-object-spread": "error",
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "always",
          prev: "*",
          next: "export",
        },
      ],
      "eol-last": ["error", "always"],
      "prefer-const": "error",
      "max-params": ["error", 3],
      semi: ["error", "always"],
      "max-len": "off",
      "no-param-reassign": "off",
      "linebreak-style": "off",
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 1,
        },
      ],
      "no-underscore-dangle": [
        "error",
        {
          allow: ["_d", "_dh", "_h", "_id", "_m", "_n", "_t", "_text"],
        },
      ],
      "no-unused-vars": "off",
      "no-confusing-arrow": ["error", { allowParens: true }],
      "arrow-body-style": "off",
      "no-shadow": "off",
      "operator-linebreak": [
        "error",
        "after",
        {
          overrides: {
            ":": "before",
            "?": "before",
          },
        },
      ],
    },
  },
  {
    settings: {
      react: {
        pragma: "React",
        version: "detect",
      },
      "import/resolver": {
        typescript: { project: "./tsconfig.json" },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
);

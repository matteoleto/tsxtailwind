module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: process.cwd(),
  },
  env: {
    browser: true,
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-prettier",
    "eslint-plugin-unused-imports",
    "eslint-plugin-testing-library",
    "unused-imports",
    "testing-library",
  ],
  extends: [
    // npm package: eslint
    "eslint:recommended",
    // npm package: eslint-config-airbnb-base
    "airbnb-base",
    // plugin name: eslint-plugin-import
    "plugin:import/recommended",
    "plugin:import/typescript",
    // plugin name: @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    // plugin name: eslint-plugin-react
    "plugin:react/recommended",
    // plugin name: eslint-plugin-react-hooks
    "plugin:react-hooks/recommended",
    // plugin name: eslint-plugin-jsx-a11y
    "plugin:jsx-a11y/recommended",
    // npm package: eslint-config-prettier
    "prettier",
    // plugin name: eslint-plugin-sonarjs
    "plugin:sonarjs/recommended",
  ],
  overrides: [
    {
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
      },
    },
    {
      // enable eslint-plugin-testing-library rules or preset only for test files
      files: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
        "**/tests/**/*.[jt]s?(x)",
      ],
      extends: ["plugin:testing-library/react"],
      rules: {
        "testing-library/no-unnecessary-act": "warn",
        "testing-library/prefer-user-event": "warn",
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      // enable eslint-plugin-testing-library rules or preset only for test files
      files: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
        "**/test-setup.tsx",
      ],
      extends: ["plugin:testing-library/react"],
      rules: {
        "testing-library/no-global-regexp-flag-in-query": "error",
        "testing-library/prefer-user-event": "error",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
  rules: {
    // eslint rules
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "comma-dangle": "off",
    "implicit-arrow-linebreak": "off",
    "max-len": [
      "error",
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-extra-semi": "off",
    // in order to allow reassignment of specific param, override this rule using options props: true and ignorePropertyModificationsFor
    "no-tabs": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-use-before-define": "off",
    semi: ["error", "always"],
    "prefer-arrow-callback": "off",
    "no-shadow": "off",
    // @typescript-eslint/eslint-plugin
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    // eslint-plugin-import
    "import/export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/first": "off",
    "import/named": "off",
    "import/no-extraneous-dependencies": "warn",
    "import/prefer-default-export": "off",
    // eslint-plugin-prettier
    "prettier/prettier": "error",
    // eslint-plugin-react-hooks
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    // eslint-plugin-react
    "react/jsx-boolean-value": 1,
    "react/prop-types": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    // eslint-plugin-unused-imports
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"]],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "no-console": ["error", { allow: ["error", "warn"] }],
    // sonar lint rules
    "sonarjs/cognitive-complexity": "warn",
    "sonarjs/no-collapsible-if": "warn",
    "sonarjs/no-duplicate-string": "warn",
    "sonarjs/no-duplicated-branches": "warn",
    "sonarjs/no-identical-conditions": "warn",
    "sonarjs/no-identical-expressions": "warn",
    "sonarjs/no-redundant-boolean": "warn",
    "sonarjs/no-small-switch": "warn",
    "sonarjs/no-unused-collection": "warn",
    "sonarjs/no-use-of-empty-return-value": "warn",
    "sonarjs/prefer-immediate-return": "warn",
    "sonarjs/prefer-object-literal": "warn",
    "sonarjs/prefer-single-boolean-return": "warn",
    "sonarjs/prefer-while": "warn",
    "sonarjs/no-useless-catch": "warn",
    "sonarjs/no-nested-template-literals": "warn",
    "sonarjs/no-all-duplicated-branches": "warn",
    "sonarjs/no-gratuitous-expressions": "warn",
    "sonarjs/max-switch-cases": "warn",
    "sonarjs/no-empty-collection": "warn",
    "sonarjs/no-identical-functions": "warn",

    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-explicit-any": "warn",

    "no-param-reassign": [
      "warn",
      {
        props: true,
        ignorePropertyModificationsFor: ["accumulator", "state", "event"],
      },
    ],
    "unused-imports/no-unused-imports": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: true,
      node: {
        moduleDirectory: ["node_modules", "utils"],
        extensions: [".js", ".jsx", ".d.ts", ".ts", ".tsx"],
      },
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
};

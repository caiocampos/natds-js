/* eslint-disable max-lines */
/* eslint-disable no-magic-numbers */
module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
    {
      "files": "*.d.ts",
      "rules": {
        "init-declarations": ["off"]
      }
    },
    {
      "files": [
        "**/jest.config.js",
        "packages/icons/scripts/*.js",
        "packages/web/config/test/*.ts",
        "scripts/helpers/*.js"
      ],
      "rules": {
        "@typescript-eslint/no-var-requires": ["off"],
        "max-len": [
          "off",
          127
        ],
        "max-lines": ["off"],
        "no-console": ["off"]
      }
    },
    {
      "files": [
        "packages/docs/addons/ComponentWithLabel/index.tsx",
        "packages/docs/src/components/Badge/Badge.story.tsx",
        "packages/docs/src/components/Buttons/ButtonGroup/ButtonGroup.story.tsx",
        "packages/docs/src/components/Link/sections.tsx",
        "packages/docs/src/components/List/Interactive.tsx",
        "packages/docs/src/components/Popover/Popover.story.tsx",
        "packages/docs/src/components/Popover/sections.tsx",
        "packages/docs/src/components/Tab/Interactive.tsx",
        "packages/docs/src/components/Tab/sections.tsx",
        "packages/docs/src/icons/Icons.story.tsx",
        "packages/docs/src/icons/index.tsx",
        "packages/styles/src/themes/theBodyShop/the-body-shop-dark.ts",
        "packages/styles/src/themes/theBodyShop/the-body-shop-light.ts",
        "packages/web/src/__tests__/index.spec.tsx",
        "packages/web/src/__tests__/Icon/getFontSize.spec.tsx",
        "packages/web/src/__tests__/index.spec.tsx",
        "packages/web/src/__tests__/Popover.spec.tsx",
        "packages/web/src/__tests__/Provider.spec.tsx",
        "packages/web/src/Components/BottomNavigationAction.tsx",
        "packages/web/src/Components/Fab/index.tsx",
        "packages/web/src/Components/Fab/IFabProps.tsx",
        "packages/web/src/Components/shared.ts",
        "packages/web/src/Components/TextField/Field.tsx",
        "packages/web/src/Provider/index.tsx"
      ],
      "rules": {
        "@typescript-eslint/ban-ts-comment": ["off"]
      }
    },
    {
      "files": ["*.spec.tsx"],
      "rules": {
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "max-len": [
          "error",
          151
        ],
        "max-lines": [
          "error",
          399
        ],
        "max-lines-per-function": [
          "error",
          208
        ],
        "max-statements": [
          "error",
          28
        ],
        "no-console": ["off"],
        "no-empty-function": ["off"],
        "no-return-assign": ["off"],
        "no-undefined": ["off"],
        "sort-vars": ["off"]
      }
    },
    {
      "files": ["packages/web/src/Components/**/*.{ts,tsx}"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "max-len": [
          "error",
          179
        ],
        "max-lines-per-function": [
          "error",
          101
        ],
        "no-use-before-define": ["off"],
        "react/display-name": ["off"]
      }
    },
    {
      "files": ["packages/icons/src/natds-icons.css.d.ts"],
      "rules": {
        "newline-after-var": ["off"]
      }
    },
    {
      "files": ["packages/docs/**/*.{js,jsx,ts,tsx}"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],

        /**
         * @todo fix(docs): re-enable `global-require` and replace unexpected require() by a valid image reference
         */
        "global-require": ["off"],
        "max-len": [
          "error",
          250
        ],
        "max-lines-per-function": [
          "error",
          107
        ],
        "no-empty-function": ["off"],
        "no-magic-numbers": ["off"],
        "no-undefined": ["off"],
        "no-use-before-define": ["off"],
        "react/display-name": ["off"],
        "react/no-children-prop": ["off"],
        "react/prop-types": ["off"],
        "require-jsdoc": ["off"]
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-newline": "error",
    "array-bracket-spacing": "error",
    "array-callback-return": "error",
    "array-element-newline": "error",
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": [
      "error",
      { "after": true,
        "before": true }
    ],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "callback-return": "error",
    "camelcase": "error",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "complexity": "error",
    "computed-property-spacing": "error",
    "consistent-return": "error",
    "consistent-this": "error",
    "curly": "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-location": "error",
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": "error",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "generator-star-spacing": "error",
    "global-require": "error",
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-denylist": "error",
    "id-length": "error",
    "id-match": "error",
    "implicit-arrow-linebreak": "error",
    "indent": [
      "error",
      2
    ],
    "indent-legacy": [
      "error",
      2
    ],
    "init-declarations": "error",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "line-comment-position": "error",
    "linebreak-style": "error",
    "lines-around-comment": "error",
    "lines-around-directive": "error",
    "lines-between-class-members": "error",
    "max-classes-per-file": "error",
    "max-depth": "error",
    "max-len": [
      "error",
      121
    ],
    "max-lines": "error",
    "max-lines-per-function": "error",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": [
      "error",
      12
    ],
    "max-statements-per-line": "error",
    "multiline-comment-style": "error",
    "multiline-ternary": "off",
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": "error",
    "newline-before-return": "error",
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-confusing-arrow": "error",
    "no-console": "error",
    "no-constructor-return": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-magic-numbers": "error",
    "no-mixed-operators": "error",
    "no-mixed-requires": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-native-reassign": "error",
    "no-negated-condition": "error",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-promise-executor-return": "error",
    "no-proto": "error",
    "no-restricted-exports": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable-loop": "error",
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "error",
    "object-curly-spacing": "off",
    "object-property-newline": "error",
    "object-shorthand": "error",
    "one-var": "off",
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "padded-blocks": "off",
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-reflect": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": "error",
    "quotes": [
      "error",
      "double"
    ],
    "radix": "error",
    "require-atomic-updates": "error",
    "require-await": "error",
    "require-jsdoc": "error",
    "require-unicode-regexp": ["off"],
    "rest-spread-spacing": "error",
    "semi": "error",
    "semi-spacing": "error",
    "semi-style": "error",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "strict": "error",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "valid-jsdoc": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": "error"
  },
  "settings": {
    "react": {
      "linkComponents": ["Link"],
      "pragma": "React",
      "version": "16.13.1"
    }
  }
};

module.exports = {
    "parser": "babel-eslint",

    "parserOptions": {
      "ecmaVersion": 8,
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module",
      "allowImportExportEverywhere": false,
      "codeFrame": false
    },

    "plugins": [
      "react"
    ],

    "extends": ["standard", "standard-react"],

    "rules": {
      "indent": [
        "error",
        4
      ],
      "semi": [
        "error",
        "always"
      ],
      "react/jsx-no-bind": ["error", {
        "allowArrowFunctions": true,
        "allowBind": false,
        "ignoreRefs": true
      }],
      "react/jsx-indent": ['error', 4],
      "react/jsx-indent-props": ['error', 4],
      "react/no-did-update-set-state": "error",
      "react/no-unknown-property": "error",
      "react/no-unused-prop-types": "error",
      "react/prop-types": "error",
      "react/react-in-jsx-scope": "error"
    }
  };

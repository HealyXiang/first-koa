module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: ['react-hooks'],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'no-console': 1,
        'no-unused-vars': 1,
        curly: [2, 'all'],
        semi: 2,
        quotes: [2, 'single'],
        indent: [
            2,
            2,
            {
                SwitchCase: 1,
            },
        ],
        'no-mixed-spaces-and-tabs': 2,
        'no-trailing-spaces': 2,
        'space-unary-ops': [
            2,
            {
                nonwords: false,
                overrides: {},
            },
        ],
        'eol-last': 2,
        'space-before-function-paren': [
            2,
            {
                anonymous: 'ignore',
                named: 'never',
            },
        ],
        'no-multiple-empty-lines': 2,
        'no-with': 2,
        'no-spaced-func': 2,
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'space-infix-ops': 2,
        'keyword-spacing': 2,
        'space-in-parens': [2, 'never'],
        'space-before-blocks': [2, 'always'],
        'dot-notation': 2,
        'spaced-comment': 0,
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'operator-linebreak': [1, 'before'],
        'arrow-spacing': 'warn',
        'one-var': [2, 'never'],
        'no-multi-str': 2,
        'array-bracket-spacing': 2,
        '@typescript-eslint/indent': ['error', 2],
        'react/jsx-closing-bracket-location': 1,
        '@typescript-eslint/camelcase': 2,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'comma-spacing': [1, { before: false, after: true }],
        'object-curly-spacing': [1, 'always'],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};

  // see https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb

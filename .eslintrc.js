// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    env: {
        node: true
    },
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        // parser: 'babel-eslint',
        parser: '@typescript-eslint/parser',
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript',
        // 'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 'warn',
        'quotes': ['error', 'single', { allowTemplateLiterals: true }],
        'indent': ['off', 4],
        'padded-blocks': ['off', 'always'],
        'one-var': ['off', 'consecutive'],
        'template-curly-spacing': ["error", "always"],
        'space-before-function-paren': ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
        'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }],
        // '@typescript-eslint/member-delimiter-style': ['error', {
        //     multiline: {
        //         delimiter: 'none', requireLast: true,
        //     },
        //     singleline: {
        //         delimiter: 'semi', requireLast: false,
        //     },
        // }]
    }
}

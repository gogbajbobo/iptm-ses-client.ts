// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
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
        'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }]
    }
}

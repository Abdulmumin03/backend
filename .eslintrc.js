module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        'prettier/prettier': ['error'],
        indent: ['error', 4],
    },
};

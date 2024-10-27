const paths = ['react-error-boundary'];
const patterns = ['*/index', '*/index.ts', '*/index.tsx'];

module.exports = {
    root: true,
    env: {browser: true, es2022: true},
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended', // It should always be the last
    ],
    ignorePatterns: ['build', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        // tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh', 'simple-import-sort', 'prettier'],
    rules: {
        // Code style
        'prettier/prettier': 'error',
        'no-multiple-empty-lines': ['error', {max: 1}],
        'no-trailing-spaces': 'error',
        'no-multi-spaces': 'error',
        'no-console': 'error',
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: ['return', 'block-like']},
            {blankLine: 'always', prev: ['block-like', 'break'], next: '*'},
        ],
        'no-duplicate-imports': 'error',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // react related packages come first.
                    ['^react', '^[^@#]\\w', '^@\\w'],

                    // External imports.
                    ['^@'],

                    // Local imports, css last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '^.+\\.?(css)$'],
                ],
            },
        ],
        'no-restricted-imports': ['error', {paths, patterns}],
        'no-restricted-syntax': [
            'error',
            {
                message: 'Use generateLink instead.',
                selector: 'CallExpression[callee.name="generatePath"]',
            },
        ],
        'object-shorthand': 'error',

        // TS
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                args: 'after-used',
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
            },
        ],
        // React
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-curly-brace-presence': ['error'],
        'react-refresh/only-export-components': 'off',
    },
};

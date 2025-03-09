import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';

const eslintConfig = tseslint.config(
    {
        ignores: ['.husky', 'coverage', 'build', 'node_modules/', 'public'],
    },

    // Generic
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
            'react-hooks/exhaustive-deps': 'error',
        },
    },

    // Imports
    {
        languageOptions: {
            parser: typescriptParser,
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        settings: {
            'boundaries/include': ['src/**/*', 'testing/**/*'],
            'boundaries/elements': [
                {
                    type: 'root',
                    pattern: 'src/*.{ts,tsx}',
                    mode: 'file',
                },
            ],
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
        rules: {
            'no-duplicate-imports': 'error',
            'boundaries/no-ignored': 'off',
            'simple-import-sort/exports': 'error',
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // `react` related packages come first.
                        ['^react', '^[^@#]\\w', '^@\\w'],

                        // External imports.
                        ['^#', '^@'],

                        // Local imports, `css` last.
                        [
                            '^\\.\\.(?!/?$)',
                            '^\\.\\./?$',
                            '^\\./(?=.*/)(?!/?$)',
                            '^\\.(?!/?$)',
                            '^\\./?$',
                            '^.+\\.?(css)$',
                        ],
                    ],
                },
            ],
        },
    },

    // Code style
    {
        plugins: {
            react,
            prettier,
        },
        rules: {
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
            'no-multiple-empty-lines': ['error', {max: 1}],
            'no-trailing-spaces': 'error',
            'object-shorthand': 'error',
            'no-multi-spaces': 'error',
            'react/jsx-curly-brace-presence': 'error',
            'max-depth': 'error',
            'max-params': ['error', {max: 3}],
            'padding-line-between-statements': [
                'error',
                {blankLine: 'always', prev: '*', next: ['return', 'block-like']},
                {blankLine: 'always', prev: ['block-like', 'break'], next: '*'},
            ],
            'no-delete-var': 'error',
            'no-empty': 'error',
            'no-unsafe-optional-chaining': 'error',
            'array-callback-return': 'error',
            'for-direction': 'error',
            'no-async-promise-executor': 'error',
            'no-await-in-loop': 'error',
            'no-cond-assign': 'error',
            'no-constant-condition': 'error',
            'no-control-regex': 'error',

            // Suggestions
            'arrow-body-style': ['error', 'as-needed'],
            'block-scoped-var': 'error',
            'capitalized-comments': [
                'error',
                'always',
                {
                    ignoreConsecutiveComments: true,
                },
            ],
        },
    },
    {
        files: ['src/**/*'],
        rules: {
            'no-console': 'error',
        },
    },
    {
        files: ['src/shared/context/**/*', 'testing/**/*'],
        rules: {
            'react-refresh/only-export-components': 'off',
        },
    },
);

export default eslintConfig;

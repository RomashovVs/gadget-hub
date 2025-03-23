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

            //Possible Problems
            'array-callback-return': 'error',
            'constructor-super': 'error',
            'for-direction': 'error',
            'getter-return': 'error',
            'no-async-promise-executor': 'error',
            'no-await-in-loop': 'error',
            'no-class-assign': 'error',
            'no-compare-neg-zero': 'error',
            'no-cond-assign': 'error',
            'no-constant-binary-expression': 'error',
            'no-constant-condition': 'error',
            'no-constructor-return': 'error',
            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-dupe-args': 'error',
            'no-dupe-class-members': 'error',
            'no-dupe-else-if': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-empty-character-class': 'error',
            'no-empty-pattern': 'error',
            'no-ex-assign': 'error',
            'no-fallthrough': 'error',
            'no-func-assign': 'error',
            'no-import-assign': 'error',
            'no-inner-declarations': 'error',
            'no-invalid-regexp': 'error',
            'no-irregular-whitespace': 'error',
            'no-loss-of-precision': 'error',
            'no-misleading-character-class': 'error',
            'no-new-native-nonconstructor': 'error',
            'no-obj-calls': 'error',
            'no-promise-executor-return': 'error',
            'no-prototype-builtins': 'error',
            'no-self-assign': 'error',
            'no-self-compare': 'error',
            'no-setter-return': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-this-before-super': 'error',
            'no-undef': 'error',
            'no-unexpected-multiline': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable': 'error',
            'no-unreachable-loop': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unsafe-optional-chaining': 'error',
            'no-unused-private-class-members': 'error',
            'no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'none',
                },
            ],
            'no-use-before-define': 'error',
            'no-useless-backreference': 'error',
            'require-atomic-updates': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',

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

module.exports = {
    extends: [
        // The base create react app config
        // https://github.com/facebook/create-react-app/blob/6223fd98c2c8abf4fa7320e048ec62ab0bb8941c/packages/eslint-config-react-app/index.js
        'react-app',

        // Recommended TypeScript config
        // https://github.com/typescript-eslint/typescript-eslint/tree/5fdd21a1726fb6928098c4152aec55a30df960d4/packages/eslint-plugin#supported-rules
        'plugin:@typescript-eslint/recommended',

        // Recommended React config
        // https://github.com/yannickcr/eslint-plugin-react/blob/6fc4bc0a933501ff307d45922ac1bc2e8ea499dc/index.js#L115-L148
        'plugin:react/recommended',

        // Disable eslint rules that conflict with prettier
        'prettier',
    ],
    plugins: ['@emotion'],

    rules: {
        // Using only named exports gives us better autocomplete / autoimport support
        'import/no-default-export': 'error',

        // Prevent duplicate import statements from the same package/file
        'import/no-duplicates': 'error',

        // Use the TS rule instead of the default rule
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],

        // Use the TS rule instead of the default rule
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        // Don't require a return type to be defined if TS can infer one
        '@typescript-eslint/explicit-function-return-type': 'off',

        // Empty / noop functions can be useful, so let's allow them
        '@typescript-eslint/no-empty-function': 'off',

        // This requires all exported functions to be explicitly typed.
        // While a good practice, it's cumbersome for React components.
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Enforce camel casing with `camelcase` over `@typescript-eslint/naming-convention` because
        // naming-convention does not currently allow double underscores like… `__typename` which is kind of
        // onerous when you're using GraphQL.  Don't worry, the internet has informed the maintainers.
        camelcase: 'warn',

        // Since we're using TS, it's repetitive to have to also specify PropTypes
        'react/prop-types': 'off',

        'react/display-name': 'off',
        '@emotion/jsx-import': 'error',
        '@emotion/no-vanilla': 'error',
        '@emotion/import-from-emotion': 'error',
        '@emotion/styled-import': 'error',
        '@emotion/pkg-renaming': 'error',

        // The following rules are only required for React 16.x,
        // They will likely be removed in the future.
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },

    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                // Allow `any` to be used in .d.ts files
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
        {
            files: ['*.js'],
            rules: {
                // Allow .js files to import via `require(...)`, we want this
                // for node scripts in particular
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            files: ['*.{ts,tsx}'],
            rules: {
                // In TS files, require that class fields specify public/private/protected
                '@typescript-eslint/explicit-member-accessibility': 'error',

                '@typescript-eslint/ban-ts-comment': [
                    'error',
                    {
                        'ts-expect-error': 'allow-with-description',
                        'ts-ignore': 'allow-with-description',
                        'ts-nocheck': true,
                        'ts-check': false,
                    },
                ],
            },
        },
    ],
};

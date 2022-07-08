module.exports = {
    extends: ['airbnb', 'airbnb/hooks'],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'react/prop-types': 0,
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/function-component-definition': [1, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
        'dot-notation': 0,
        'object-curly-newline': [1, { ImportDeclaration: 'never' }],
        'max-len': 0,
        // 'no-use-before-define': 'off',
        // 'no-console': 'off',
    },
};

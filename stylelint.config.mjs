/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard'],
    overrides: [{
        files: ['*.js'],
        customSyntax: 'postcss-lit'
    }],
    rules: {
        'color-no-invalid-hex': true,
        'no-irregular-whitespace': true,
        'media-feature-name-value-no-unknown': true,
        'no-unknown-animations': true,
        'no-unknown-custom-media': true,
        'no-unknown-custom-properties': true,
        'unit-no-unknown': true,
        'custom-property-empty-line-before': 'never',
        'declaration-empty-line-before': 'never',
        'declaration-block-single-line-max-declarations': 0,
        'number-max-precision': 2,
        'alpha-value-notation': 'number',
        'import-notation': 'string',
        'selector-class-pattern': '.*',
        'rule-empty-line-before': ['always', {except: 'first-nested'}],
        'value-keyword-case': ['lower', {camelCaseSvgKeywords: true}],
        'block-no-empty': [true, {ignore: ['comments']}]
    }
};

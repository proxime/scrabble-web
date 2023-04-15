module.exports = {
  bracketSpacing: true,
  tabWidth: 4,
  singleQuote: true,
  trailingComma: 'all',
  bracketSameLine: false,
  endOfLine: 'lf',
  importOrder: [
      '<THIRD_PARTY_MODULES>',
      '^./(?!.*styled$)',
      '^@speeki(.*)$',
      '^@@types(.*)$',
      '^@assets(.*)$',
      '^@components(.*)$',
      '^@graphql(.*)$',
      '^@utils(.*)$',
      '^@services(.*)$',
      '^@(.*)',
      '^(.*)styled$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};

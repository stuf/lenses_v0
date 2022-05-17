const {
  flatJoin,
  tokenizeCamelCase,
  tokenizeKebabCase,
  tokensToCamelCase,
  tokensToKebabCase,
  capitalize,
  kebabToCamel,
  camelToKebab,
} = require('./util');

test('flatJoin', () => {
  expect(flatJoin(['asd', 'sdf'])).toBe('asdsdf');
});

test('capitalize', () => {
  expect(capitalize('foo')).toBe('Foo');
});

test('tokenizeCamelCase', () => {
  expect(tokenizeCamelCase('asdFoo')).toEqual(['asd', 'foo']);
});

test('tokenizeKebabCase', () => {
  expect(tokenizeKebabCase('asd-foo-Bar')).toEqual(['asd', 'foo', 'bar']);
});

test('tokensToCamelCase', () => {
  expect(tokensToCamelCase(['asd', 'foo'])).toBe('asdFoo');
});

test('tokensToKebabCase', () => {
  expect(tokensToKebabCase(['asd', 'foo'])).toBe('asd-foo');
});

test('kebabToCamel', () => {
  expect(kebabToCamel('foo-bar')).toBe('fooBar');
});

test('camelToKebab', () => {
  expect(camelToKebab('fooBar')).toBe('foo-bar');
});

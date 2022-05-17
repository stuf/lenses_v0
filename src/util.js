const R = require('ramda');
const L = require('partial.lenses');

const flatJoin = R.pipe(R.flatten, R.join(''));

// Just force rest to be lowercase lol
const capitalize = str =>
  [str.charAt(0).toUpperCase(), str.slice(1).toLowerCase()].join('');

const tokenizeCamelCase = R.pipe(
  R.match(/(^[a-z]+|[A-Z][a-z]+)/g),
  R.map(R.toLower),
);

const tokenizeKebabCase = R.pipe(R.split('-'), R.map(R.toLower));

//

const tokensToCamelCase = R.pipe(
  R.map(R.toLower),
  L.modify([L.slice(1, Infinity), L.elems], capitalize),
  flatJoin,
);

const tokensToKebabCase = R.pipe(R.map(R.toLower), R.join('-'));

//

const kebabToCamel = R.pipe(tokenizeKebabCase, tokensToCamelCase);

const camelToKebab = R.pipe(tokenizeCamelCase, tokensToKebabCase);

module.exports = {
  flatJoin,
  capitalize,
  tokenizeCamelCase,
  tokenizeKebabCase,
  tokensToCamelCase,
  tokensToKebabCase,

  camelToKebab,
  kebabToCamel,
};

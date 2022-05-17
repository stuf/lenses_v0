const L = require('partial.lenses');
const I = require('./index');

const o1 = {
  'foo-bar': 123,
  'top-Kek': 234,
  'nested-thing': {
    a: 1,
    'foo-test': 2,
  },
};

test('yes', () => {
  const x = L.get(I.normalizeKeys, o1);
  console.log(x);
});

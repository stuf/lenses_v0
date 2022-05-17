const L = require('partial.lenses');
const { kebabToCamel, camelToKebab } = require('./util');

const normalizeKeys = L.iso(
  L.modify(L.keys, kebabToCamel),
  L.modify(L.keys, camelToKebab),
);

const isos = {
  normalizeKeys,
};

module.exports = {
  normalizeKeys,

  isos,
};

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-df7d1986.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["jr-test_2.cjs",[[1,"jr-test",{"data":[16],"options":[16]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;

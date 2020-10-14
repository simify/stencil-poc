import { p as promiseResolve, b as bootstrapLazy } from './index-01be438c.js';

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["jr-test_2",[[1,"jr-test",{"data":[16],"options":[16]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };

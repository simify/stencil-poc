import { p as promiseResolve, b as bootstrapLazy } from './index-01be438c.js';

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["jr-test_2",[[1,"jr-test",{"data":[16],"options":[16]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

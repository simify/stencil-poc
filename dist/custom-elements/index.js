import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const jrTestCss = ":host{display:block}";

const JrTest = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h("ul", { "data-test": this.options.foo }, this.data.map(item => (h("li", null, item)))));
  }
  static get style() { return jrTestCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const JrTest$1 = /*@__PURE__*/proxyCustomElement(JrTest, [1,"jr-test",{"data":[16],"options":[16]}]);
const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      JrTest$1,
  MyComponent$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { JrTest$1 as JrTest, MyComponent$1 as MyComponent, defineCustomElements };

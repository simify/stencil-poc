'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-df7d1986.js');

const jrTestCss = ":host{display:block}";

const JrTest = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    var _a;
    const test = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.foo) || 'Yack';
    return (index.h("div", null, index.h("h1", null, "Web Component"), index.h("ul", { "data-test": test }, (this.data || []).map(item => (index.h("li", null, item))))));
  }
};
JrTest.style = jrTestCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

exports.jr_test = JrTest;
exports.my_component = MyComponent;

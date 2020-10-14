import { r as registerInstance, h } from './index-01be438c.js';

const jrTestCss = ":host{display:block}";

const JrTest = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ul", { "data-test": this.options.foo }, this.data.map(item => (h("li", null, item)))));
  }
};
JrTest.style = jrTestCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

export { JrTest as jr_test, MyComponent as my_component };

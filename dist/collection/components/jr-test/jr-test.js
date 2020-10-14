import { Component, Prop, h } from '@stencil/core';
export class JrTest {
  render() {
    var _a;
    const test = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.foo) || 'Yack';
    return (h("div", null,
      h("h1", null, "Web Component"),
      h("ul", { "data-test": test }, (this.data || []).map(item => (h("li", null, item))))));
  }
  static get is() { return "jr-test"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["jr-test.css"]
  }; }
  static get styleUrls() { return {
    "$": ["jr-test.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "string[]",
        "resolved": "string[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "IOptions",
        "resolved": "IOptions",
        "references": {
          "IOptions": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
}

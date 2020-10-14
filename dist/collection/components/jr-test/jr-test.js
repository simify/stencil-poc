import { Component, Prop, h } from '@stencil/core';
export class JrTest {
  render() {
    return (h("ul", { "data-test": this.options.foo }, this.data.map(item => (h("li", null, item)))));
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

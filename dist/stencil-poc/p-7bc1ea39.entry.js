import{r as t,h as s}from"./p-2b0bdf59.js";const o=class{constructor(s){t(this,s)}render(){var t;const o=(null===(t=this.options)||void 0===t?void 0:t.foo)||"Yack";return s("div",null,s("h1",null,"Web Component"),s("ul",{"data-test":o},(this.data||[]).map(t=>s("li",null,t))))}};o.style=":host{display:block}";const r=class{constructor(s){t(this,s)}getText(){return(this.first||"")+((t=this.middle)?" "+t:"")+((s=this.last)?" "+s:"");var t,s}render(){return s("div",null,"Hello, World! I'm ",this.getText())}};r.style=":host{display:block}";export{o as jr_test,r as my_component}
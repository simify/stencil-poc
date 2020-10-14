import { Component, Prop, h } from '@stencil/core';

export interface IOptions {
  foo: string;
  bar?: number;
  baz?: boolean;
}

@Component({
  tag: 'jr-test',
  styleUrl: 'jr-test.css',
  shadow: true,
})
export class JrTest {
  @Prop() data: string[];
  @Prop() options: IOptions;

  render() {
    const test = this.options?.foo || 'Yack';
    return (
      <div>
        <h1>Web Component</h1>
        <ul data-test={test}>
          {(this.data || []).map(item => (
            <li>{item}</li>
            ))}
        </ul>
      </div>
    );
  }
}

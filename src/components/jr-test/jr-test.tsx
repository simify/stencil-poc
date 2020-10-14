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
    return (
      <ul data-test={this.options.foo}>
        {this.data.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

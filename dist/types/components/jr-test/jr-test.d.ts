export interface IOptions {
  foo: string;
  bar?: number;
  baz?: boolean;
}
export declare class JrTest {
  data: string[];
  options: IOptions;
  render(): any;
}

import Handlebars from "handlebars";

const { compile } = Handlebars;

export function isCompile(input: any, options?: CompileOptions) {
  const template = compile(input, options);
  template({});
}

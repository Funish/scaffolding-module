import Handlebars from "handlebars";

const { compile } = Handlebars;

export function isCompile(input: string, options?: CompileOptions) {
  const template = compile(input, options);
  template({});
}

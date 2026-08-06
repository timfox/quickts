# ⚡️ QuickTS - A mighty TypeScript engine

## Overview

QuickTS is a small and embeddable TypeScript engine based on QuickJS-NG. It aims
to support the latest [ECMAScript] specification and TypeScript, including
erasable syntax in `.ts`, `.mts`, and `.cts` files.

TypeScript support discards type annotations and type-only declarations at parse
time; it does not type-check code. Numeric and string enums are transpiled to
const objects; `const enum` declarations are erased. Supported syntax includes
annotations, generics (including call-site type arguments), classes, modules,
`satisfies`, `as const`, typed arrows, and constructor modifiers. Use
`qjs -t` / `qjs --typescript` to parse any file as TypeScript.

This project is a _fork_ of the [original QuickJS project] by Fabrice Bellard and Charlie Gordon, after it went dormant, with the intent of reigniting its development.

## Getting started

Head over to the [project website] for instructions on how to get started and more
documentation.

## Authors

[@bnoordhuis], [@saghul], and many more [contributors].

[ECMAScript]: https://tc39.es/ecma262/
[original QuickJS project]: https://bellard.org/quickjs
[@bnoordhuis]: https://github.com/bnoordhuis
[@saghul]: https://github.com/saghul
[contributors]: https://github.com/quickjs-ng/quickjs/graphs/contributors
[project website]: https://quickjs-ng.github.io/quickjs/

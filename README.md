# ⚡️ QuickTS - A mighty TypeScript engine

## Overview

QuickTS is a small and embeddable TypeScript engine based on QuickJS-NG. It aims
to support the latest [ECMAScript] specification and TypeScript, including
erasable syntax in `.ts`, `.mts`, and `.cts` files.

TypeScript support strips type annotations and type-only declarations at parse
time. Numeric and string enums are transpiled with tsc-compatible sequential
assignments and reverse mappings; `const enum` declarations are erased.
Namespaces with runtime exports are lowered to object assignments, including
dotted names (`namespace A.B`), `export class` inside namespaces, and merged
re-declarations of the same namespace. Use `qjs -t` / `qjs --typescript` to parse any file as TypeScript, and
`qjs --typecheck` for primitive annotation checking (with basic literal
inference and variable reference checking when annotations are omitted).

### Examples

Runnable TypeScript examples live in `examples/`:

| File | Demonstrates |
|------|--------------|
| `hello.ts` | Basic `.ts` script |
| `hello_module.mts` | ES module import |
| `quickts_showcase.ts` | Enums, namespaces, classes, generics, modules |
| `enum_status.ts` | Numeric/string/`const` enums, reverse mappings |
| `geometry.ts` | Namespaces, nested/dotted namespaces, merge, classes |
| `classes_demo.ts` | Interfaces, abstract classes, parameter properties |
| `advanced_syntax.ts` | `satisfies`, `as const`, typed arrows, generics |
| `inventory.mts` / `inventory_runner.mts` | Exported enum + class module |
| `pi_bigint.ts` | BigInt types and `declare` erasure |

Run an example: `build/qjs examples/quickts_showcase.ts`

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

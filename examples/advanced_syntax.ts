/**
 * Advanced erasable syntax: satisfies, as const, typed arrows, generic calls.
 *
 * Run: build/qjs examples/advanced_syntax.ts
 */

const palette = {
    r: 255,
    g: 128,
    b: 0,
} satisfies { r: number; g: number; b: number };

const primes = [2, 3, 5, 7, 11] as const;

const format = (value: number): string => `value=${value}`;
const double = (n: number) => n * 2;

function pick<T>(value: T): T {
    return value;
}

const name = pick<string>("quickts");
const version = pick<number>(2);

type Point2D = { x: number; y: number };
const origin: Point2D = { x: 0, y: 0 };

print("advanced_syntax.ts");
print("  palette =", JSON.stringify(palette));
print("  primes[2] =", primes[2]);
print("  format(42) =", format(42));
print("  double(21) =", double(21));
print("  pick =", name, version);
print("  origin =", JSON.stringify(origin));

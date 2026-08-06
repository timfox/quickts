// satisfies operator
const config = { x: 1, y: 2 } satisfies { x: number; y: number };

// as const
const values = [1, 2, 3] as const;

// typed arrow functions
const toString = (value: number): string => String(value);
const double = (n: number) => n * 2;

// constructor access modifiers (parsed as plain parameters)
class Account {
    constructor(public owner: string, private balance: number) {
        this.owner = owner;
    }
}

// namespace declarations are erased
namespace MathUtils {
    export const PI = 3.14;
}

if (config.x + config.y !== 3)
    throw new Error("satisfies was not erased");
if (values[0] !== 1)
    throw new Error("as const was not erased");
if (toString(42) !== "42" || double(3) !== 6)
    throw new Error("typed arrow functions were not erased");
if (new Account("alice", 10).owner !== "alice")
    throw new Error("constructor parameter properties were not erased");

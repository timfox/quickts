namespace MathUtils {
    export const PI = 3.14;
    export function double(x: number): number {
        return x * 2;
    }
    export namespace Units {
        export const Meter = 1;
    }
}

if (MathUtils.PI !== 3.14)
    throw new Error("namespace const was not lowered");
if (MathUtils.double(3) !== 6)
    throw new Error("namespace function was not lowered");
if (MathUtils.Units.Meter !== 1)
    throw new Error("nested namespace was not lowered");

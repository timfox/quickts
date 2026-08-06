namespace MathUtils {
    export const PI = 3.14;
    export function double(x: number): number {
        return x * 2;
    }
    export class Point {
        constructor(public x: number, public y: number) {}
    }
    export namespace Units {
        export const Meter = 1;
    }
}

namespace App.Utils {
    export const VERSION = 2;
}

namespace MergeTest {
    export const first = 1;
}
namespace MergeTest {
    export const second = 2;
}

if (MathUtils.PI !== 3.14)
    throw new Error("namespace const was not lowered");
if (MathUtils.double(3) !== 6)
    throw new Error("namespace function was not lowered");
if (new MathUtils.Point(1, 2).x !== 1)
    throw new Error("namespace class was not lowered");
if (MathUtils.Units.Meter !== 1)
    throw new Error("nested namespace was not lowered");
if (App.Utils.VERSION !== 2)
    throw new Error("dotted namespace was not lowered");
if (MergeTest.first !== 1 || MergeTest.second !== 2)
    throw new Error("namespace merge was not preserved");

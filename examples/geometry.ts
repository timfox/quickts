/**
 * Namespace demo: exports, nested namespaces, dotted names, and classes.
 *
 * Run: build/qjs examples/geometry.ts
 */

namespace Geometry {
    export const PI = 3.14159265;

    export function circleArea(radius: number): number {
        return Geometry.PI * radius * radius;
    }

    export class Point {
        constructor(public x: number, public y: number) {}
        distanceTo(other: Point): number {
            const dx = this.x - other.x;
            const dy = this.y - other.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    }

    export namespace Units {
        export const Meter = 1;
        export const Centimeter = 0.01;
    }
}

namespace Geometry {
    export const TAU = Geometry.PI * 2;
}

namespace App.Rendering {
    export const ENGINE = "quickts";
}

const origin = new Geometry.Point(0, 0);
const corner = new Geometry.Point(3, 4);

print("geometry.ts");
print("  circleArea(2) =", Geometry.circleArea(2).toFixed(2));
print("  distance (0,0)->(3,4) =", origin.distanceTo(corner));
print("  Units.Meter =", Geometry.Units.Meter);
print("  merged TAU =", Geometry.TAU.toFixed(5));
print("  App.Rendering.ENGINE =", App.Rendering.ENGINE);

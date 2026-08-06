import type { ExportedPoint } from "./typescript-types.mts";

const point: ExportedPoint = { x: 1, y: 2 };
if (point.x + point.y !== 3)
    throw new Error("module type syntax was not erased");

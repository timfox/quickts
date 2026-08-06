/* TypeScript syntax accepted through the .ts CLI path is erased. */
interface Point {
    x: number;
    y: number;
}

type Identifier = string | number;
declare const fromDeclaration: string;

function add(left: number, right?: number): number {
    return left + (right as number);
}

const point: Point = { x: 20, y: 22 };
if (add(point.x, point.y) !== 42)
    throw new Error("typed function parameters were not erased");
if (("quickjs" as string).length !== 7)
    throw new Error("type assertion was not erased");

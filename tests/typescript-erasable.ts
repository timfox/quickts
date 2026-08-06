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
assert(add(point.x, point.y) === 42);
assert(("quickjs" as string).length === 7);

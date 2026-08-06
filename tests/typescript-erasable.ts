/* TypeScript syntax accepted through the .ts CLI path is erased. */
interface Point {
    x: number;
    y: number;
}

type Identifier = string | number;
declare const fromDeclaration: string;

function add<T extends number>(left: T, right?: number): number {
    return left + (right as number);
}

const point: Point = { x: 20, y: 22 };
const typedCallback: (value: number) => string = value => String(value);
const definitelyPoint: Point = point!;
if (add(point.x, point.y) !== 42)
    throw new Error("typed function parameters were not erased");
if (("quickjs" as string).length !== 7)
    throw new Error("type assertion was not erased");
if (typedCallback(definitelyPoint.x) !== "20")
    throw new Error("function types or non-null assertions were not erased");

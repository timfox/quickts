/* example of a TypeScript module importing a C module */
import * as os from "qjs:os";

interface PointInstance {
    x: number;
    y: number;
    norm(): number;
}

type PointConstructor = new (x: number, y: number) => PointInstance;

const isWin = os.platform === 'win32';
const { Point } = await import(`./point.${isWin ? 'dll' : 'so'}`) as {
    Point: PointConstructor;
};

function assert(b: boolean, str: string): void
{
    if (b) {
        return;
    } else {
        throw Error("assertion failed: " + str);
    }
}

class ColorPoint extends Point {
    color: number;

    constructor(x: number, y: number, color: number) {
        super(x, y);
        this.color = color;
    }
    get_color(): number {
        return this.color;
    }
}

function main(): void
{
    let pt: PointInstance;
    let pt2: ColorPoint;

    pt = new Point(2, 3);
    assert(pt.x === 2, "pt.x");
    assert(pt.y === 3, "pt.y");
    pt.x = 4;
    assert(pt.x === 4, "pt.x after assignment");
    assert(pt.norm() == 5, "pt.norm()");

    pt2 = new ColorPoint(2, 3, 0xffffff);
    assert(pt2.x === 2, "pt2.x");
    assert(pt2.color === 0xffffff, "pt2.color");
    assert(pt2.get_color() === 0xffffff, "pt2.get_color()");
}

main();

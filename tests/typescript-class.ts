interface Drawable {
    draw(): void;
}

abstract class Shape implements Drawable {
    public readonly id: number;
    protected label: string;

    constructor(id: number) {
        this.id = id;
        this.label = "shape";
    }

    draw(): void {}
}

class Point extends Shape {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        super(x);
        this.x = x;
        this.y = y;
    }
}

const { x, y }: { x: number; y: number } = { x: 1, y: 2 };
try {
    throw new Error("boom");
} catch (error: unknown) {
    if (!(error instanceof Error))
        throw new Error("catch type annotation was not erased");
}

if (x + y !== 3)
    throw new Error("destructuring type annotation was not erased");

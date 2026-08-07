/**
 * Class demo: interfaces, abstract classes, parameter properties, generics.
 *
 * Run: build/qjs examples/classes_demo.ts
 */

interface Summable {
    add(value: number): void;
    total(): number;
}

abstract class Accumulator implements Summable {
    protected sum: number;

    constructor(initial: number) {
        this.sum = initial;
    }

    add(value: number): void {
        this.sum += value;
    }

    total(): number {
        return this.sum;
    }
}

class Counter extends Accumulator {
    constructor(public label: string, start = 0) {
        super(start);
    }

    describe(): string {
        return `${this.label}: ${this.total()}`;
    }
}

class TaggedCounter extends Counter {
    constructor(label: string, public tag: string, start = 0) {
        super(label, start);
    }
}

function identity<T>(value: T): T {
    return value;
}

const counter = new Counter("items", 10);
counter.add(5);
counter.add(identity<number>(3));

const tagged = new TaggedCounter("events", "demo", 1);
tagged.add(4);

print("classes_demo.ts");
print(" ", counter.describe());
print(" ", tagged.describe(), `[${tagged.tag}]`);

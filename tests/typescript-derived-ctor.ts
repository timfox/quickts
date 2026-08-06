class Base {
    constructor() {}
}

class Derived extends Base {
    constructor(public x: number, public y: number) {
        super();
    }
}

const d = new Derived(3, 4);
if (d.x !== 3 || d.y !== 4)
    throw new Error("derived constructor parameter properties failed");

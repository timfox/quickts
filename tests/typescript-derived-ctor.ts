class Base {
    constructor() {}
}

class Derived extends Base {
    constructor(public x: number, public y: number) {
        super();
    }
}

class AutoSuper extends Base {
    constructor(public z: number) {}
}

const d = new Derived(3, 4);
if (d.x !== 3 || d.y !== 4)
    throw new Error("derived constructor parameter properties failed");

const a = new AutoSuper(9);
if (a.z !== 9)
    throw new Error("derived auto-super constructor failed");

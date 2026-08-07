function nextId(): number {
    return 10;
}

enum Dynamic {
    A,
    B = nextId(),
    C,
}

if (Dynamic.A !== 0)
    throw new Error("Dynamic.A should be 0");
if (Dynamic.B !== 10)
    throw new Error("Dynamic.B should be 10");
if (Dynamic.C !== 11)
    throw new Error("Dynamic.C should be 11");
if (Dynamic[0] !== "A" || Dynamic[11] !== "C")
    throw new Error("enum reverse mapping missing");

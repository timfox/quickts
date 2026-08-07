// Numeric enum transpilation
enum Color {
    Red,
    Green = 5,
    Blue,
}

// String enum
enum Direction {
    Up = "up",
    Down = "down",
}

// const enum is erased entirely
const enum Erased {
    A,
    B,
}

if (Color.Red !== 0)
    throw new Error("Color.Red should be 0");
if (Color.Green !== 5)
    throw new Error("Color.Green should be 5");
if (Color.Blue !== 6)
    throw new Error("Color.Blue should be 6");
if (Direction.Up !== "up" || Direction.Down !== "down")
    throw new Error("string enum values incorrect");

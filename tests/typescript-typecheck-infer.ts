// inferred types without explicit annotations
const inferredNumber = 42;
const inferredString = "ok";
const inferredBool = false;
const fromNumber: number = inferredNumber;
const fromString: string = inferredString;
const fromBool: boolean = inferredBool;

if (inferredNumber + inferredString.length !== 44)
    throw new Error("inferred literal types failed");
if (fromNumber !== 42 || fromString !== "ok" || fromBool !== false)
    throw new Error("inferred variable references failed");

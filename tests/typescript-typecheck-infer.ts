// inferred types without explicit annotations
const inferredNumber = 42;
const inferredString = "ok";
const inferredBool = false;

if (inferredNumber + inferredString.length !== 44)
    throw new Error("inferred literal types failed");

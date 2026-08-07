const count: number = 42;
const label: string = "ok";
const active: boolean = true;

if (count + label.length !== 44)
    throw new Error("typechecked bindings failed");

/* example of a TypeScript module importing a C module */
import * as os from "qjs:os";

const isWin = os.platform === 'win32';
const { fib } = await import(`./fib.${isWin ? 'dll' : 'so'}`) as {
    fib: (n: number) => number;
};

console.log("Hello World");
console.log("fib(10)=", fib(10));

/**
 * QuickTS feature showcase — runs every major TypeScript lowering path.
 *
 * Run: build/qjs examples/quickts_showcase.ts
 *      build/qjs --typecheck examples/quickts_showcase.ts
 */

function fib(n: number): number {
    if (n <= 0)
        return 0;
    if (n == 1)
        return 1;
    return fib(n - 1) + fib(n - 2);
}

enum Priority {
    Low,
    Normal,
    High = 10,
}

namespace Demo {
    export const NAME = "QuickTS";
    export function greet(who: string): string {
        return `Hello from ${Demo.NAME}, ${who}!`;
    }
    export class Widget {
        constructor(public id: number) {}
    }
}

namespace Demo {
    export const VERSION = 1;
}

class Base {
    constructor() {}
}

class Worker extends Base {
    constructor(public task: string) {}
}

const config = { retries: 3, timeout: 1000 } satisfies { retries: number; timeout: number };
const ids = [1, 2, 3] as const;
const twice = (n: number): number => n * 2;
const label = (function id<T>(v: T): T { return v; })<string>("showcase");

const inferredPort = 8080;
const boundPort: number = inferredPort;

const widget = new Demo.Widget(42);
const worker = new Worker("compile");

const results = {
    fib10: fib(10),
    priority: Priority.High,
    reverse: Priority[10],
    greet: Demo.greet("TypeScript"),
    widgetId: widget.id,
    workerTask: worker.task,
    configRetries: config.retries,
    constId: ids[1],
    doubled: twice(21),
    label,
    version: Demo.VERSION,
    boundPort,
};

print("QuickTS showcase");
for (const [key, value] of Object.entries(results))
    print(`  ${key}:`, value);

if (results.fib10 !== 55)
    throw new Error("fib import failed");
if (results.priority !== 10 || results.reverse !== "High")
    throw new Error("enum lowering failed");
if (results.widgetId !== 42 || results.workerTask !== "compile")
    throw new Error("class / namespace lowering failed");
if (results.version !== 1)
    throw new Error("namespace merge failed");

print("  all checks passed");

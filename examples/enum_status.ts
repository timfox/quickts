/**
 * Enum demo: numeric reverse mappings, string enums, and namespace exports.
 *
 * Run: build/qjs examples/enum_status.ts
 */

enum HttpStatus {
    OK = 200,
    NotFound = 404,
    ServerError = 500,
}

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const enum CompileTimeOnly {
    Debug = 1,
    Verbose = 2,
}

// const enums are fully erased at parse time (no runtime object).
// const flags = CompileTimeOnly.Debug | CompileTimeOnly.Verbose;

namespace Api {
    export enum Version {
        V1 = 1,
        V2 = 2,
    }
}

function assert(cond: boolean, msg: string): void {
    if (!cond)
        throw new Error(msg);
}

assert(HttpStatus.OK === 200, "numeric enum member");
assert(HttpStatus[200] === "OK", "numeric enum reverse mapping");
assert(Direction.Up === 0 && Direction.Right === 3, "auto-increment enum");
assert(Api.Version.V2 === 2, "exported namespace enum");

print("enum_status.ts");
print("  HttpStatus.OK =", HttpStatus.OK, `(${HttpStatus[200]})`);
print("  Direction =", Direction.Up, Direction.Down, Direction.Left, Direction.Right);
print("  Api.Version.V1 =", Api.Version.V1);
print("  const enum CompileTimeOnly is erased (see source)");

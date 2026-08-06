export enum Status {
    Pending,
    Done = 2,
    Active,
}

if (Status.Pending !== 0 || Status.Done !== 2 || Status.Active !== 3)
    throw new Error("exported enum values incorrect");

/**
 * TypeScript module: exported enum, class, and helper functions.
 *
 * Run: build/qjs examples/inventory_runner.mts
 */

export enum ItemKind {
    Weapon,
    Armor,
    Potion,
}

export class Item {
    constructor(
        public name: string,
        public kind: ItemKind,
        public weight: number,
    ) {}
}

export function describe(item: Item): string {
    const kinds = ["weapon", "armor", "potion"];
    return `${item.name} (${kinds[item.kind]}, ${item.weight}kg)`;
}

export function totalWeight(items: Item[]): number {
    let sum = 0;
    for (const item of items)
        sum += item.weight;
    return sum;
}

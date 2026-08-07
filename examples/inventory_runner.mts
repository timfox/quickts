/**
 * Imports a TypeScript module and exercises exported runtime values.
 *
 * Run: build/qjs examples/inventory_runner.mts
 */

import { Item, ItemKind, describe, totalWeight } from "./inventory.mts";

const loadout = [
    new Item("Sword", ItemKind.Weapon, 3.5),
    new Item("Shield", ItemKind.Armor, 4.2),
    new Item("Elixir", ItemKind.Potion, 0.3),
];

print("inventory_runner.mts");
for (const item of loadout)
    print(" ", describe(item));
print("  total weight =", totalWeight(loadout).toFixed(1), "kg");
print("  ItemKind.Weapon =", ItemKind.Weapon);

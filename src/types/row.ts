import type { Cell } from "./cell";
import type { Color } from "./color";

export interface Row {
    cells: Cell[];
    color: Color;
    locked: boolean;
    lockTicked: boolean;
}
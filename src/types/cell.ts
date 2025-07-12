import type { Color } from "./color";

export interface Cell {
    number: number;
    color: Color;
    crossed: boolean;
    canLockRow: boolean;
}
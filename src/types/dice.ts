import type { Color } from "./color"

export type Dice = {
    color: Color;
    sides: 1 | 2 | 3 | 4 | 5 | 6;
    currentSide: 1 | 2 | 3 | 4 | 5 | 6;
}
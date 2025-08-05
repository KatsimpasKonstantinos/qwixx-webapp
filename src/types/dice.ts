import type { Color } from "./color"

export type Dice = {
    color: Color;
    sides: number;
    currentSide: number;
}
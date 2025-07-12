import type { GameModifier } from "../types/game-modifier";
import { mixedColorsModifier } from "./modify-papers/mixed-colors";
import { mixedNumbersModifier } from "./modify-papers/mixed-numbers";

export const gameModifiers: Record<string, GameModifier> = {
    mixedNumbers: {
        name: "mixed-numbers",
        description: "Numbers in a row will be mixed.",
        applyModifier: mixedNumbersModifier
    } as const,
    mixedColors: {
        name: "mixed-colors",
        description: "Numbers in a row will be mixed.",
        applyModifier: mixedColorsModifier
    } as const
};
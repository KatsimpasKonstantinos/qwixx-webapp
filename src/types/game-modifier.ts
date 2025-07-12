import type { Paper } from "./paper";

export interface GameModifier {
    name: string;
    description: string;
    applyModifier: (paper: Paper, random: boolean) => Paper;
}
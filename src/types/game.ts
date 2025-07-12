import type { GameBaseMode } from "./game-base-mode";
import type { GameModifier } from "./game-modifier";
import type { Player } from "./player";

export interface Game {
    id: string;
    name: string;
    settings: GameSettings;
    host: Player;
    players: Player[];
}

export interface GameSettings {
    gameBaseMode: GameBaseMode;
    gameModifiers: GameModifier[];
    waitTime: number; //Wait time until move is made automatically skip/miss
    previewHint: boolean; //Highlight valid moves
    scoreHint: boolean; //Self and others
}
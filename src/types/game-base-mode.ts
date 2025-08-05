import type { Move } from "./move";
import type { Paper } from "./paper";
import type { Row } from "./row";

export interface GameBaseMode {
    name: string;
    description: string;
    missPenalty: number;
    crossesNeededToLockRow: number;
    createPaper: () => Paper;
    validator: (paper: Paper, move: Move) => boolean;
    scorer: (paper: Paper, missesPenalty: number) => number;
    scorerRow: (row: Row) => number;
}
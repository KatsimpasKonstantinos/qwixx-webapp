import type { GameBaseMode } from "../types/game-base-mode.ts";
import { createDefaultPaper } from "./create-papers/default.ts";
import { createLongoPaper } from "./create-papers/longo.ts";
import { defaultScorePaper, defaultScoreRow } from "./scorer/default.ts";
import { defaultIsValidMove } from "./validators/default.ts";

export const gameBaseModes: Record<string, GameBaseMode> = {
    default: {
        name: 'default',
        description: 'The classic Qwixx game mode with standard rules.',
        missPenalty: 5,
        crossesNeededToLockRow: 5,
        createPaper: createDefaultPaper,
        validator: defaultIsValidMove,
        scorer: defaultScorePaper,
        scorerRow: defaultScoreRow
    } as const,
    longo: {
        name: 'longo',
        description: 'A longer version of Qwixx with 15 columns instead of 12.',
        missPenalty: 5,
        crossesNeededToLockRow: 5,
        createPaper: createLongoPaper,
        validator: defaultIsValidMove,
        scorer: defaultScorePaper,
        scorerRow: defaultScoreRow
    } as const,
};


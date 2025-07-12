import type { Paper } from "../../types/paper";
import type { Row } from "../../types/row";

export function defaultScorePaper(paper: Paper, missesPenalty:number): number {
    let score = 0;

    for (const row of paper.rows) {
        score += defaultScoreRow(row);
    }

    score -= paper.misses * missesPenalty;

    return score;
}

export function defaultScoreRow(row: Row): number {
    let score = 0;
    let amountOfCrossedCells = row.cells.filter(cell => cell.crossed).length + (row.lockTicked ? 1 : 0);
    score = (amountOfCrossedCells * (amountOfCrossedCells + 1)) / 2 //triangular numbers
    return score;
}
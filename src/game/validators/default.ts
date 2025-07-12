import type { Move } from "../../types/move";
import type { Paper } from "../../types/paper";

export function defaultIsValidMove(paper: Paper, move: Move): boolean {
    const rowIndex = move.rowIndex;
    const cellIndex = move.cellIndex;
    if (rowIndex == null || cellIndex == null) return false;

    const invalidRowIndex = rowIndex < 0 || rowIndex >= paper.rows.length;
    const invalidCellIndex = cellIndex < 0 || cellIndex >= paper.rows[rowIndex].cells.length;
    if (invalidRowIndex || invalidCellIndex) return false;

    let row = paper.rows[rowIndex];
    if (!row) return false;
    if (row.locked) return false;

    const cellAlreadyCrossed = row.cells[cellIndex].crossed;
    const hasCrossedCellRight = row.cells.some(cell => cell.crossed && cell.number > cellIndex);
    if (cellAlreadyCrossed || hasCrossedCellRight) return false;

    return true;
}


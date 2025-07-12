import type { Paper } from "../../types/paper";

export function createLongoPaper(): Paper {
    let paper: Paper = {
        misses: 0,
        maxMisses: 4,
        rows: []
    }
    return paper;
}
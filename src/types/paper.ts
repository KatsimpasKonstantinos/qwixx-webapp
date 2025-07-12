import type { Row } from "./row";

export interface Paper {
    misses: number;
    maxMisses: number;
    rows: Row[];
}
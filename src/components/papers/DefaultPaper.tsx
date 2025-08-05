import type { GameSettings } from "../../types/game";
import type { Player } from "../../types/player";
import './DefaultPaper.css';

function DefaultPaper({ player, gameSettings, self }: { player: Player, gameSettings: GameSettings, self: boolean }) {


    function renderRows() {
        return player.paper.rows.map((row, index) => (
            <div key={index} className="default-paper-row">
                {row.cells.map((cell, cellIndex) => {
                    const colorVar = `var(--${cell.color})`;

                    let hasCrossedRight = false
                    for (let ci = cellIndex; ci < row.cells.length; ci++) {
                        if (row.cells[ci].crossed) hasCrossedRight = true;
                    }

                    const stateClass = row.locked
                        ? "locked"
                        : cell.canLockRow
                            ? "canlock"
                            : hasCrossedRight
                                ? "rightCrossed"
                                : "";

                    return (
                        <span
                            key={cellIndex}
                            className={`default-paper-cell default-paper-bg ${stateClass}`}
                            style={{ "--color": colorVar }}
                        >
                            {cell.number}
                            {cell.crossed && (
                                <span className="default-paper-cell-cross">X</span>
                            )}
                        </span>
                    );
                })}
                <span
                    className="default-paper-cell default-paper-bg"
                    style={{ "--color": `var(--${row.color})` }}
                >
                    {row.locked ? "🔒" : "🔓"}
                    {row.lockTicked && (
                        <span className="default-paper-cell-cross">X</span>
                    )}
                </span>
            </div>
        ));
    }


    function renderScore() {
        let out = [];

        for (let i = 0; i < player.paper.rows.length; i++) {
            const row = player.paper.rows[i];
            const borderColorVar = `var(--${row.color})`;

            out.push(
                <div
                    className="default-paper-score-cell default-paper-border"
                    key={row.color}
                    style={{ "--border-color": borderColorVar }}
                >
                    <span>{gameSettings.gameBaseMode.scorerRow(row)}</span>
                </div>
            );

            out.push(
                <span key={`separator-${row.color}`}>
                    {i === player.paper.rows.length - 1 ? "-" : "+"}
                </span>
            );
        }

        out.push(
            <div
                className="default-paper-score-cell default-paper-border"
                key="miss"
                style={{ "--border-color": "var(--black)" }}
            >
                <span>{player.paper.misses * gameSettings.gameBaseMode.missPenalty}</span>
            </div>
        );

        out.push(<span key="separator-miss">=</span>);

        out.push(
            <div
                className="default-paper-score-cell default-paper-border"
                key="score"
                style={{ "--border-color": "var(--white)" }}
            >
                <span>
                    {gameSettings.gameBaseMode.scorer(player.paper, gameSettings.gameBaseMode.missPenalty)}
                </span>
            </div>
        );

        return out;
    }

    function renderMisses() {
        const out = [];
        const word = "MISS";

        for (let i = 0; i < player.paper.maxMisses; i++) {
            const letter = i < player.paper.misses ? word[i % word.length] : "";

            out.push(
                <div
                    key={i}
                    className="default-paper-miss-cell default-paper-border"
                    style={{ "--border-color": "var(--black)" }}
                >
                    <span>{letter}</span>
                </div>
            );
        }

        return out;
    }


    return (
        <div className={"default-paper-container"}>
            <div className={`default-paper default-paper-${self ? "self" : "enemy"}`}>
                <span className="default-paper-player-name">{player.name}</span>
                <div className="default-paper-rows">
                    {renderRows()}
                </div>
                <div className="default-paper-score-miss-container">
                    <div className="default-paper-score">
                        {renderScore()}
                    </div>
                    <div className="default-paper-misses">
                        {renderMisses()}
                    </div>
                </div>
            </div>
            <div className="default-paper-overlay">

            </div>
        </div>
    );
}

export default DefaultPaper;

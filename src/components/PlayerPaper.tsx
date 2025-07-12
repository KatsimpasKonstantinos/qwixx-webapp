import type { GameSettings } from "../types/game";
import type { Player } from "../types/player";
import './PlayerPaper.css';

function PlayerPaper({ player, gameSettings, self }: { player: Player, gameSettings: GameSettings, self: boolean }) {


    function renderRows() {
        return player.paper.rows.map((row, index) => (
            <div key={index} className="player-paper-row">
                {row.cells.map((cell, cellIndex) => (
                    <span
                        key={cellIndex}
                        className={`player-paper-cell player-paper-bg-${cell.canLockRow ? cell.color + "-lock" : cell.color}`}
                    >
                        {cell.number}
                        {cell.crossed && (
                            <span className="player-paper-cell-cross">X</span>
                        )}
                    </span>
                ))}
            </div>
        ));
    }

    function renderScore() {
        let out = [];

        for (let row of player.paper.rows) {
            out.push(
                <div className={`player-paper-score-cell player-paper-border-${row.color}`} key={row.color}>
                    <span>
                        {gameSettings.gameBaseMode.scorerRow(row)}
                    </span>
                </div>
            );
            if (row === player.paper.rows[player.paper.rows.length - 1]) {
                out.push(<span key={`separator-${row.color}`}>-</span>);

            } else {
                out.push(<span key={`separator-${row.color}`}>+</span>);
            }
        }

        out.push(
            <div className={"player-paper-score-cell player-paper-border-miss"} key={"miss"}>
                <span>
                    {player.paper.misses * gameSettings.gameBaseMode.missPenalty}
                </span>
            </div>
        );

        out.push(<span key="separator-miss">=</span>);
        out.push(
            <div className={"player-paper-score-cell player-paper-border-score"} key={"miss"}>
                <span>
                    {gameSettings.gameBaseMode.scorer(player.paper, gameSettings.gameBaseMode.missPenalty)} {/* Assuming scorer function takes paper and missesPenalty */}
                </span>
            </div>
        );

        return out;
    }

    function renderMisses() {
        let out = [];
        let word = "MISS";

        for (let i = 0; i < player.paper.maxMisses; i++) {
            out.push(
                <div className={"player-paper-miss-cell player-paper-border-miss"}>
                    <span>
                        {player.paper.misses - 1 >= i ? word[i % word.length] : ""}
                    </span>
                </div>
            );
        }

        return out;
    }

    return (
        <div className={`player-paper player-paper-${self ? "self" : "enemy"}`}>
            <span className="player-paper-player-name">{player.name}</span>
            <div className="player-paper-rows">
                {renderRows()}
            </div>
            <div className="player-paper-score-miss-container">
                <div className="player-paper-score">
                    {renderScore()}
                </div>
                <div className="player-paper-misses">
                    {renderMisses()}
                </div>
            </div>
        </div>
    );
}

export default PlayerPaper;

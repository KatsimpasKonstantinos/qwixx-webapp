import type { GameSettings } from "../../types/game";
import type { Player } from "../../types/player";
import "./DefaultScorerRules.css"

function DefaultScorerRules({ player, gameSettings }: { player: Player, gameSettings: GameSettings }) {
    let columnsAmount = gameSettings.gameBaseMode.createPaper().rows[0].cells.length;

    console.log(player);


    function render() {
        let out = [];
        for (let crossedAmount = 0; crossedAmount <= columnsAmount; crossedAmount++) {
            let paper = gameSettings.gameBaseMode.createPaper();
            for (let i = 0; i < crossedAmount; i++) {
                paper.rows[0].cells[i].crossed = true;
            }
            let score = gameSettings.gameBaseMode.scorer(paper, gameSettings.gameBaseMode.missPenalty);

            let colors = []
            for (let row of player.paper.rows) {
                let rowScore = gameSettings.gameBaseMode.scorerRow(row);
                if (rowScore === score) {
                    colors.push(row.color);
                }
            }
            const color = `linear-gradient(140deg, ${colors.map(c => `var(--${c})`).join(", ")})`;
            out.push(
                <div className="default-scorer-rules-cell default-scorer-rules-bg" style={{ "--color": `${color}` }} key={crossedAmount}>
                    <div className="default-scorer-rules-crossed">
                        {crossedAmount + "x"}
                    </div>
                    <div className="default-scorer-rules-score">
                        {score}
                    </div>
                </div>)
        }
        return out;
    }


    return (
        <div className="default-scorer-rules">
            <div className="default-scorer-rules-cell">
                Scoring
            </div>
            {render()}
        </div>
    );
}

export default DefaultScorerRules;
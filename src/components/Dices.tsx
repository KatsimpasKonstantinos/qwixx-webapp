import type { Dice } from "../types/dice";
import "./Dices.css"

function Dices({ dices, myTurn }: { dices: Dice[], myTurn: boolean }) {


    const maxDiceSelected = 2;
    let diceSelected = 0;
    let dicesSelected = [];


    function handleDiceClick(event) {
        const el = event.currentTarget;
        if (el.classList.contains("transparent")) return;

        if (el.classList.contains("selected")) {
            el.classList.toggle("selected");
            diceSelected--
        } else {
            if (diceSelected < maxDiceSelected) {

                el.classList.toggle("selected");
                diceSelected++;
            }
        }
    }


    function renderDice(dice: Dice) {
        const number = dice.currentSide;
        const color = dice.color ? dice.color : "white";
        let divClassName = `dices-dice dices-${number} ${!myTurn && color != "white" ? "transparent" : ""}`;
        let divStyle = { "--color": `var(--${color})` };
        let dicesDotClassName = color === "white" ? "dices-dot dices-dot-white" : "dices-dot"
        let out = [];



        if (number <= 3) {
            out.push(
                <div className={divClassName} style={divStyle} onClick={handleDiceClick}>
                    {Array.from({ length: number }).map((_, index) => (
                        <span key={index} className={dicesDotClassName}></span>
                    ))}
                </div>
            )
        } else if (number === 4) {
            out.push(
                <div className={divClassName} style={divStyle} onClick={handleDiceClick}>
                    <div className="dices-column">
                        <span className={dicesDotClassName}></span>
                        <span className={dicesDotClassName}></span>
                    </div>
                    <div className="dices-column">
                        <span className={dicesDotClassName}></span>
                        <span className={dicesDotClassName}></span>

                    </div>
                </div>
            )
        } else if (number === 5) {
            out.push(
                <div className={divClassName} style={divStyle} onClick={handleDiceClick}>
                    <div className="dices-column">
                        <span className={dicesDotClassName}></span>
                        <span className={dicesDotClassName}></span>

                    </div>
                    <div className="dices-column">
                        <span className={dicesDotClassName}></span>

                    </div>
                    <div className="dices-column">
                        <span className={dicesDotClassName}></span>
                        <span className={dicesDotClassName}></span>

                    </div>
                </div>
            )
        } else if (number === 6) {
            out.push(
                <div className={divClassName} style={divStyle} onClick={handleDiceClick}>
                    <div className="dices-column">
                        <span className={dicesDotClassName}></span>
                        <span className={dicesDotClassName}></span>
                        <span className={dicesDotClassName}></span>

                    </div>
                    <div className="dices-column">
                        <span className={dicesDotClassName}></span>
                        <span className={dicesDotClassName}></span>
                        <span className={dicesDotClassName}></span>

                    </div>
                </div>
            )
        }

        return out
    }

    function renderDices(dices: Dice[]) {
        return dices.map(dice => {
            return renderDice(dice);
        })
    }



    return (
        <div className="dices">
            {renderDices(dices)}
        </div>
    );
}

export default Dices;
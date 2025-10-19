import './Game.css'
import { createDefaultPaper } from '../game/create-papers/default'
import { gameBaseModes } from '../game/game-base-modes'
import type { GameSettings } from '../types/game'
import type { Player } from '../types/player'
import Leaderboard from '../components/Leaderboard'
import DefaultPaper from '../components/papers/DefaultPaper'
import DefaultScorerRules from '../components/scorer-rules/DefaultScorerRules'
import Avatar from '../components/Avatar'
import Dices from '../components/Dices'
import type { Color } from '../types/color'
import type { Dice } from '../types/dice'

function Game() {

    const rowsAmount = 4;
    const columnsAmount = 11;

    function randomPlayer(): Player {
        let player: Player = {
            id: Math.floor(Math.random() * 1000),
            name: `Player ${Math.floor(Math.random() * 100)}`,
            paper: createDefaultPaper()
        };

        const crossedAmount = Math.floor(Math.random() * (rowsAmount * columnsAmount));
        //const crossedAmount = 0;

        for (let x = 0; x < crossedAmount; x++) {
            player.paper.rows[Math.floor(Math.random() * rowsAmount)].cells[Math.floor(Math.random() * columnsAmount)].crossed = true;
        }

        for (let row of player.paper.rows) {
            if (Math.random() < 0.3) {
                row.locked = true;
                row.lockTicked = Math.random() < 0.3;
            } else {
                row.locked = false;
                row.lockTicked = false;
            }
        }

        player.paper.misses = Math.floor(Math.random() * 5);

        return player;
    }


    let testGameSettings: GameSettings = {
        gameBaseMode: gameBaseModes.default,
        gameModifiers: [],
        waitTime: 0,
        previewHint: false,
        scoreHint: false
    }

    let mainPlayer = randomPlayer();

    function randomDice(color: Color) {
        let dice: Dice = {
            color: color,
            sides: 6,
            currentSide: Math.floor(Math.random() * 6 + 1)
        }
        return dice;
    }
    return (
        <div className="Game">
            <div className='game-scorer-rules'>
                <DefaultScorerRules player={mainPlayer} gameSettings={testGameSettings} />
            </div>
            <div className='game-avatar'>
                <Avatar />
            </div>
            <div className='game-board'>
                <Dices dices={[randomDice(), randomDice(), randomDice("red"), randomDice("yellow"), randomDice("green"), randomDice("blue")]} myTurn={true} />
                <DefaultPaper player={mainPlayer} gameSettings={testGameSettings} self={true} />
            </div>
            <div className='game-leaderboard'>
                <Leaderboard players={[randomPlayer(), randomPlayer(), randomPlayer(), randomPlayer(), randomPlayer(), randomPlayer(), randomPlayer()]} gameSettings={testGameSettings} />
            </div>
        </div>
    )
}

export default Game

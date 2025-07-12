import './Game.css'
import PlayerPaper from '../components/PlayerPaper'
import { createDefaultPaper } from '../game/create-papers/default'
import { gameBaseModes } from '../game/game-base-modes'
import type { GameSettings } from '../types/game'
import type { Player } from '../types/player'

function Game() {

    const rowsAmount = 4;
    const columnsAmount = 12;

    function randomPlayer(): Player {
        let player: Player = {
            id: Math.floor(Math.random() * 1000),
            name: `Player ${Math.floor(Math.random() * 100)}`,
            paper: createDefaultPaper()
        };

        const crossedAmount = Math.floor(Math.random() * (rowsAmount * columnsAmount));

        for (let x = 0; x < crossedAmount; x++) {
            player.paper.rows[Math.floor(Math.random() * rowsAmount)].cells[Math.floor(Math.random() * columnsAmount)].crossed = true;
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

    return (
        <div className="Game">
            <div className='Board'>
                <PlayerPaper player={randomPlayer()} gameSettings={testGameSettings} self={true} />

            </div>
            <div className='leaderboard'>
                <PlayerPaper player={randomPlayer()} gameSettings={testGameSettings} self={false} />
                <PlayerPaper player={randomPlayer()} gameSettings={testGameSettings} self={false} />
                <PlayerPaper player={randomPlayer()} gameSettings={testGameSettings} self={false} />
            </div>
        </div>
    )
}

export default Game

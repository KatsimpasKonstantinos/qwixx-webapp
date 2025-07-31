import './Leaderboard.css'
import type { GameSettings } from "../types/game";
import type { Player } from "../types/player";
import DefaultPaper from './papers/DefaultPaper';

function Leaderboard({ players, gameSettings }: { players: Player[], gameSettings: GameSettings }) {

    return (
        <div className="Leaderboard">
            {players.map(player => (
                <div className='leaderboard-player-paper'>
                    <DefaultPaper player={player} gameSettings={gameSettings} self={false} />
                </div>
            ))}
        </div>
    );
}

export default Leaderboard;
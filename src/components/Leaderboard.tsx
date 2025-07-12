import type { Player } from "../types/player";

function Leaderboard({ players }: { players: Player[] }) {


    return (
        <div className="Leaderboard">
            {players.map(player => (
                <div key={player.id} className="leaderboard-player">
                    <span className="player-name">{player.name}</span>
                    <span className="player-score">{player.paper.misses}</span>
                </div>
            ))}
        </div>
    );
}

export default Leaderboard;
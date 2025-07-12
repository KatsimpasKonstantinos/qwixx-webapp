function Header() {
    return (
        <header className="Header">
            <h1>Qwixx Web App</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/game">Game</a></li>
                    <li><a href="/leaderboard">Leaderboard</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
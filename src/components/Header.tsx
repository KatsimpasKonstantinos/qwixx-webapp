import './Header.css'

function Header() {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/game">Game</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
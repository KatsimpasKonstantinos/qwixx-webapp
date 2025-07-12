import './App.css'
import Header from "./components/Header"
import Game from "./pages/Game"

function App() {

  return (
    <div className="App">
      <Header />
      <div className='Content'>
        <Game />
      </div>
    </div>
  )
}

export default App

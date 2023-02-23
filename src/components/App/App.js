import React from "react"
import Game from "../Game"
import Header from "../Header"
import Nav from "../Nav/Nav"

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  )
}

export default App

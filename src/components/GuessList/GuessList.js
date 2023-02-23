import React from "react"
import { checkGuess } from "../../game-helpers"

function GuessList({ guesses, answer }) {
  console.log(guesses)
  return (
    <div className="guess-results">
      {guesses.map((entry, idx) => {
        const status = checkGuess(entry.word, answer)
        console.log(status)
        return (
          <p className="guess" key={entry.id}>
            {guesses[idx].word.split("").map((letter, wIdx) => {
              return (
                <span className={`cell ${status[wIdx].status}`} key={wIdx}>
                  {letter}
                </span>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}

export default GuessList

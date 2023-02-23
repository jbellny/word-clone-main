import React from "react"

function GameBanner({ status, guessNumber, answer }) {
  console.log(guessNumber)
  function happy() {
    return (
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessNumber === 1 ? "1 guess" : `${guessNumber} of guesses`}</strong>.
      </p>
    )
  }

  function sad() {
    return (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    )
  }

  return <div className={`${status} banner`}>{status === "happy" ? happy() : sad()}</div>
}

export default GameBanner

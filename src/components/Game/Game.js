import React from "react"
import Input from "../Input/Input"
import Nav from "../Nav/Nav"
import VirtualKeyboard from "../VirtualKeyboard/VirtualKeyboard"
import GuessList from "../GuessList/GuessList"
import GameBanner from "../GameBanner/GameBanner"
import { NUM_OF_GUESSES_ALLOWED, keyArray } from "../../constants"
import { sample, deactivateLetters } from "../../utils"
import { WORDS } from "../../data"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game({ gameReset }) {
  const [guesses, setGuesses] = React.useState(createBlankEntries())
  const [kbdArray, setKbdArray] = React.useState(keyArray)
  const [guessNumber, setGuessNumber] = React.useState(0)
  const [inputDisabled, setInputDisabled] = React.useState(false)
  const [gameBannerState, setGameBannerState] = React.useState("happy")

  function handleReset() {
    setGuesses(createBlankEntries())
    setGuessNumber(0)
    setInputDisabled(false)
  }
  function createBlankEntries() {
    let arrayTemplate = []
    for (let i = 1; i <= NUM_OF_GUESSES_ALLOWED; i++) {
      arrayTemplate.push({ id: Math.random(), word: "     " })
    }
    return arrayTemplate
  }

  function handleGuess(enteredGuess) {
    console.log(guessNumber)
    if (enteredGuess === answer) {
      setInputDisabled(true)
      setGameBannerState("happy")
    } else if (guessNumber + 1 === NUM_OF_GUESSES_ALLOWED) {
      setInputDisabled(true)
      setGameBannerState("sad")
    }
    let nextGuesses = guesses
    nextGuesses[guessNumber].word = enteredGuess
    let nextKeyArray = kbdArray
    setKbdArray(deactivateLetters(nextKeyArray, enteredGuess.split("")))
    setGuessNumber(guessNumber + 1)
    setGuesses(nextGuesses)
  }

  return (
    <>
      <Nav handleReset={handleReset} />
      <GuessList guesses={guesses} answer={answer} />
      <VirtualKeyboard keyArray={kbdArray} />
      {inputDisabled ? <GameBanner status={gameBannerState} guessNumber={guessNumber} answer={answer} /> : ""}
      <Input handleGuess={handleGuess} disabled={inputDisabled} guessNumber={guessNumber} />
    </>
  )
}

export default Game

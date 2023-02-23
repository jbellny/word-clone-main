import React, { useEffect, useRef } from "react"

function Input({ handleGuess, disabled, guessNumber }) {
  const [input, setInput] = React.useState("")
  const inputFocus = useRef(null)

  useEffect(() => {
    inputFocus.current.focus()
  }, [guessNumber])

  function handleSubmit(event) {
    event.preventDefault()
    handleGuess(input)
    setInput("")
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        ref={inputFocus}
        required
        pattern={"[A-Z]{5}"}
        id="guess-input"
        type="text"
        disabled={disabled}
        value={input}
        onChange={(event) => setInput(event.target.value.toUpperCase())}
      />
    </form>
  )
}

export default Input

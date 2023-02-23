import { blankRange } from "./utils"

export function checkGuess(guess, answer) {
  if (guess === "     ") {
    return blankRange(1, 5)
  }

  const guessChars = guess.toUpperCase().split("")
  const answerChars = answer.split("")
  let answerCharsAvail = [...answerChars]
  let misPlaced = []

  let tempAnswer = guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index]

    let status
    if (guessChar === answerChar) {
      status = "correct"
      // cutElement = answerCharsAvail.splice(index, 1)
      answerCharsAvail[index] = "*"
    } else if (answerChars.includes(guessChar)) {
      status = "misplaced"
      misPlaced.push(index)
    } else {
      status = "incorrect"
    }
    return {
      letter: guessChar,
      status,
    }
  })

  misPlaced.forEach((listIndex) => {
    const letterLocation = answerCharsAvail.indexOf(guessChars[listIndex])
    if (letterLocation !== -1) {
      answerCharsAvail[letterLocation] = "*"
    } else {
      tempAnswer[listIndex].status = "incorrect"
    }
  })
  return tempAnswer
}

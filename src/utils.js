export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const range = (start, end, step = 1) => {
  let output = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

export const blankRange = (start, end, step = 1) => {
  let output = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i <= end; i += step) {
    output.push({ letter: " ", status: "" })
  }
  return output
}
export const deactivateLetters = (letterArray, lettersToFind) => {
  for (let ltr = 0; ltr < lettersToFind.length; ltr++) {
    for (let i = 0; i < letterArray.length; i++) {
      for (let j = 0; j < letterArray[i].length; j++) {
        if (letterArray[i][j].letter === lettersToFind[ltr]) {
          letterArray[i][j].active = false
        }
      }
    }
  }
  return letterArray
}

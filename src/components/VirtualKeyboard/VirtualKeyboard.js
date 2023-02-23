import React from "react"

function VirtualKeyboard({ keyArray }) {
  return (
    <div className="keyboardFrame">
      <div className="keyboardRow">
        {keyArray[0].map((letter) => {
          return (
            <span key={letter.letter} className={`kbdLetter ${letter.active ? "active" : ""}`}>
              {letter.letter}{" "}
            </span>
          )
        })}
      </div>
      <div className="keyboardRow">
        {keyArray[1].map((letter) => {
          return (
            <span key={letter.letter} className={`kbdLetter ${letter.active ? "active" : ""}`}>
              {letter.letter}{" "}
            </span>
          )
        })}
      </div>
      <div className="keyboardRow">
        {keyArray[2].map((letter) => {
          return (
            <span key={letter.letter} className={`kbdLetter ${letter.active ? "active" : ""}`}>
              {letter.letter}{" "}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default VirtualKeyboard

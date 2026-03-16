import React from "react"
import {clsx} from "clsx"
import { languages } from "./languages/language"

export default function App() {

  const [currentWord, setCurrentWord] = React.useState("react")
  const [guessedLetters, setGuessedLetters] = React.useState([])

  // console.log(guessedLetters)
  const alphabets = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetters(letter) {
    setGuessedLetters(prevletters =>
      prevletters.includes(letter) ? prevletters : [...prevletters, letter]
    )
  }

  const languageElements = languages.map(lang => {

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (
      <span key={lang.name} className="chip" style={styles}>{lang.name}</span>
    )
  })

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index}>{letter.toUpperCase()}</span>
  ))

  const keyboardElement = alphabets.split("").map(alphabet => {

    const isGuessed= guessedLetters.includes(alphabet)
    const isCorrect= isGuessed && currentWord.includes(alphabet)
    const isWrong = isGuessed && !currentWord.includes(alphabet)
    const className= clsx({
      correct: isCorrect,
      wrong: isWrong
    })
    return (
      <button
        key={alphabet}
        onClick={() => addGuessedLetters(alphabet)}
      >
        {alphabet.toUpperCase()}
      </button>
    )
  })












  return (
    <>
      <header>
        <h1>Assembly : Endgame</h1>
        <p> Guess the word within 8 attempts to keep the
          programming world safe from Assembly !
        </p>
      </header>
      <section className="game-status" >
        <h2>You win!</h2>
        <p> Well done ! 🎉</p>
      </section>
      <section className="language-chips">
        {languageElements}
      </section>
      <section className="word">
        {letterElements}
      </section>
      <section className="keyboard">
        {keyboardElement}
      </section>
      <div className="new-game-button">
        <button className="new-game">New Game</button>
      </div>
    </>
  )
}
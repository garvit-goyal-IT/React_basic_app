import Die from "./components/Die"
import React from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
export default function App(){
  const [dice, setdice]=React.useState(GenerateRandom())

  const IsGameWon=(dice.every(die=> die.isHeld) && dice.every(die => die.value === dice[0].value))

  function hold(id){
     setdice(oldDice=> {
      return oldDice.map(die=>{
        return die.id===id ?
        {...die, isHeld: !die.isHeld} :
        die
      })
     })
  }

  function GenerateRandom(){

    return new Array(10)
                .fill(0)
                .map(()=>({
                  id: nanoid(),
                  value: Math.ceil(Math.random() * 6),
                  isHeld: false
                }))

  }

  function rollDice(){
    setdice(oldDice => oldDice.map(die => die.isHeld ? die : {...die , value: Math.ceil(Math.random()*6)}))
  }

  

  const diceElements= dice.map(dieObj=> {
    return <Die 
         key={dieObj.id}
         value={dieObj.value} 
         isHeld={dieObj.isHeld}
         hold={()=>hold(dieObj.id)}
         />
  })
  return (
    <>
      <main>
          {IsGameWon && <Confetti/>}
         <h1 className="title">Tenzies</h1>
         <p className="instructions"> Roll until all dice are the same.Click each <br></br>
         die to freeze at its current value between rolls.</p>
         <div className="dice-container">
            {diceElements}
         </div>
          <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}
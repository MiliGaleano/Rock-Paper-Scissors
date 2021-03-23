import React, { useEffect, useState } from 'react'
import Classic from './components/classic'
import NewVersion from './components/newVersion'
import Header from './components/header'
import './App.css'
import './components/styles.css'
import Footer from './components/footer'
import Modal from './components/modal'

function App() {


  const [classic, setClassic] = useState(true)
  const [modalRules, setModalRules] = useState(false)
  const [score, setScore] = useState(0)
  const [userAnswer, setUserAnswer] = useState()
  const [computerAnswer, setComputerAnswer] = useState()
  const [winner, setWinner] = useState({
                                        win: false,
                                        tie: false,
                                        lose: false
                                        })

useEffect(()=> {
  const scoreStorage = localStorage.getItem('scoreStorage')
  scoreStorage && setScore(parseInt(scoreStorage))
}, [])

  const handleOption = () => {
    setClassic(!classic)
    handleRestart()
  }

  const handleRules = () => {
    setModalRules(!modalRules)
  }

  const handleScore = () => {
    setScore(current => current + 1);
    let saveScore = parseInt(score) + 1
    localStorage.setItem('scoreStorage', saveScore)
  }

  const handleUserAnswer = (x) => {
    setUserAnswer(x)
  }
  
// Paper/scissors/rock /// win, tie, lose
let checkWin = [['rock','paper','scissors'],['paper','scissors','rock'],['scissors','rock','paper']]
// scissors/spock/paper/lizard/rock /// win, win, tie, lose, lose
let checkWin2 = [
  ['paper','lizard','scissors','spock','rock'],
  ['scissors','rock','spock','lizard','paper'],
  ['rock','spock','paper','scissors','lizard'],
  ['spock','paper','lizard','rock','scissors'],
  ['lizard','scissors','rock','paper','spock']
]
const answers = ['paper','scissors','rock']
const answers2 = ['scissors','spock','paper','lizard','rock']

  const handleCompTurn = () => {
// computer turn
    let numb
    classic ? numb = Math.floor(Math.random() * (3 - 0)) + 0 : numb = Math.floor(Math.random() * (5 - 0)) + 0
    let compAns = classic ? answers[numb] : answers2[numb]
    setComputerAnswer(numb)
// check winner
      if (classic === true) {
        let winner = checkWin[userAnswer].indexOf(compAns)
          if (winner === 0) {
            setWinner({...winner, win:true })
            handleScore()
          } else if (winner === 1){
            setWinner({...winner, tie:true })
          } else {
            setWinner({...winner, lose:true })
          }
      } else {
        let winner = checkWin2[userAnswer].indexOf(compAns)
        if (winner < 2 ) {
          setWinner({...winner, win:true })
          handleScore()
        } else if (winner === 2){
          setWinner({...winner, tie:true })
        } else {
          setWinner({...winner, lose:true })
        }
      }

      return compAns
  }

  const handleRestart = () =>{
    setWinner({
            win: false,
            tie: false,
            lose: false
            }) 
    setUserAnswer()
    setComputerAnswer()
  }


  return (
    <div className='divApp'>
        {modalRules && <Modal classic={classic} handleRules={handleRules} />}
        <Header classic={classic} score={score} />
      {
        classic ? 
        <Classic classic={classic} handleUserAnswer={handleUserAnswer} handleCompTurn={handleCompTurn} userAnswer={userAnswer} computerAnswer={computerAnswer} winner={winner} handleRestart={handleRestart} /> :
        <NewVersion classic={classic} handleUserAnswer={handleUserAnswer} handleCompTurn={handleCompTurn} userAnswer={userAnswer} computerAnswer={computerAnswer} winner={winner} handleRestart={handleRestart} />
      }
        <Footer handleRules={handleRules} handleOption={handleOption} classic={classic}/>
      </div>
  )
}

export default App;

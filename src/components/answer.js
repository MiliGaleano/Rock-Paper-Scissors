import React, { useEffect, useState } from 'react'
import Paper from '../assets/icon-paper.svg'
import Rock from '../assets/icon-rock.svg'
import Scissors from '../assets/icon-scissors.svg'
import Spock from '../assets/icon-spock.svg'
import Lizard from '../assets/icon-lizard.svg'
import Buttons from './buttons'

const Answer = ({classic,handleCompTurn,userAnswer,computerAnswer,winner,handleRestart}) => {

    const [computerTurn, setComputerTurn] = useState(false)
    const [playAgain, setPlayAgain] = useState(false)

useEffect(()=> {
    handleCompTurn()
    setTimeout(()=> setComputerTurn(true), 1000 )
    setTimeout(()=> setPlayAgain(true), 2000 )
}, [userAnswer])

const answers = ['paper','scissors','rock']
const answers2 = ['scissors','spock','paper','lizard','rock']
    const styleb= classic ? answers[userAnswer] : answers2[userAnswer]
    const stylec= classic ? answers[computerAnswer] : answers2[computerAnswer]
    const icons= classic ? [Paper, Scissors, Rock] : [Scissors, Spock, Paper, Lizard, Rock]

    return(
       <div className='divAnswer'>
            <div className='divPicked'>
                {(playAgain && winner.win) &&
                    <div className='winner1'><div className='winner2'><div className='winner3'><div className='winner4'><div className='winner5'></div></div></div></div></div>
                }
                <h1 className='textResult'>YOU PICKED</h1>
                <Buttons icon={icons[userAnswer]} classic={classic} styleb={styleb} />
            </div>
            {playAgain && <div className='divPicked space'>
                {winner.win && <div><h1 className='textResult ans'>YOU WIN</h1><button className='buttonFooter' onClick={handleRestart} >PLAY AGAIN</button></div>}
                {winner.tie && <div><h1 className='textResult ans'>IT'S A TIE</h1><button className='buttonFooter' onClick={handleRestart} >PLAY AGAIN</button></div>}
                {winner.lose && <div><h1 className='textResult ans'>YOU LOSE</h1><button className='buttonFooter' onClick={handleRestart} >PLAY AGAIN</button></div>}
            </div>
            }
            <div className='divPicked'>
                {(playAgain && winner.lose) &&
                    <div className='winner1'><div className='winner2'><div className='winner3'><div className='winner4'><div className='winner5'></div></div></div></div></div>
                }
                <h1 className='textResult'>THE HOUSE PICKED</h1>
                {computerTurn ?
                <Buttons icon={icons[computerAnswer]} classic={classic} styleb={stylec} />
                : <div className='noButton'></div>
                }
            </div>
       </div>
    )
}

export default Answer
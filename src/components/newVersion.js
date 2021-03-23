import React, {useEffect, useState} from 'react'
import Paper from '../assets/icon-paper.svg'
import Rock from '../assets/icon-rock.svg'
import Scissors from '../assets/icon-scissors.svg'
import Spock from '../assets/icon-spock.svg'
import Lizard from '../assets/icon-lizard.svg'
import Pentagon from '../assets/bg-pentagon.svg'
import Buttons from './buttons'
import Answer from './answer'

const NewVersion = ({classic,handleUserAnswer,userAnswer,handleCompTurn,computerAnswer,winner,handleRestart}) => {

    let userAnsActive = false
    if (userAnswer >= 0 ){
        userAnsActive = true
    }

    const [isDesktop, setDesktop] = useState(window.innerWidth > 800)

    const updateMedia = () => {
      setDesktop(window.innerWidth > 800)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
})

const backgroundImg = !isDesktop ? {background: `url(${Pentagon}) center center/70vw 70vw no-repeat `} : {background: `url(${Pentagon}) no-repeat center`}


    return(
        <>
        {userAnsActive ? <Answer handleCompTurn={handleCompTurn} userAnswer={userAnswer} computerAnswer={computerAnswer} winner={winner} classic={classic} handleRestart={handleRestart} />
        :
            <div style={backgroundImg} className='divNewVersion' >
                <Buttons icon={Scissors} classic={classic} styleb='scissors' val={0} handleUserAnswer={handleUserAnswer}/>
                <div className='divNewVersion1'>
                    <Buttons icon={Spock} classic={classic} styleb='spock' val={1} handleUserAnswer={handleUserAnswer}/>
                    <Buttons icon={Paper} classic={classic} styleb='paper' val={2} handleUserAnswer={handleUserAnswer}/>
                </div>
                <div className='divNewVersion2'>
                    <Buttons icon={Lizard} classic={classic} styleb='lizard' val={3} handleUserAnswer={handleUserAnswer}/>
                    <Buttons icon={Rock} classic={classic} styleb='rock' val={4} handleUserAnswer={handleUserAnswer}/>
                </div>
            </div>
        }
       </>
    )
}

export default NewVersion
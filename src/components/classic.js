import React, {useEffect, useState} from 'react'
import Paper from '../assets/icon-paper.svg'
import Rock from '../assets/icon-rock.svg'
import Scissors from '../assets/icon-scissors.svg'
import Triangle from '../assets/bg-triangle.svg'
import Buttons from './buttons'
import Answer from './answer'

const Classic = ({classic,handleUserAnswer,userAnswer,handleCompTurn,computerAnswer,winner,handleRestart}) => {

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

const backgroundImg = !isDesktop ? {background: `url(${Triangle}) center center/70vw 70vw no-repeat `} : {background: `url(${Triangle}) no-repeat center`}

    return(
        <>
        {userAnsActive ? <Answer handleCompTurn={handleCompTurn} userAnswer={userAnswer} computerAnswer={computerAnswer} winner={winner} classic={classic} handleRestart={handleRestart} />
        :   <div style={backgroundImg} className='divClassic'>
                    <Buttons icon={Paper} classic={classic} styleb='paper' val={0} handleUserAnswer={handleUserAnswer} />
                    <Buttons icon={Scissors} classic={classic} styleb='scissors' val={1} handleUserAnswer={handleUserAnswer} />
                    <Buttons icon={Rock} classic={classic} styleb='rock' val={2} handleUserAnswer={handleUserAnswer} />
            </div>
        }
        </>
    )
}

export default Classic
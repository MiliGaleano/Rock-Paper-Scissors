import React from 'react'

const Buttons = ({icon, classic, styleb, handleUserAnswer, val}) => {

    const classN1 = classic ? `borderButton ${styleb}` : `borderButton butNewV ${styleb}`
    const classN2 = classic ? `divButton` : `divButton butNewV2`
    
    return(
       <div className={handleUserAnswer ? classN1 : `borderButton ${styleb} nohov` } onClick={handleUserAnswer ? ()=> handleUserAnswer(val) : null}>
            <div className={handleUserAnswer ? classN2 : `divButton nohov`}>
                <img src={icon} alt='button' className='imgButton'/>
            </div>
       </div>
    )
}

export default Buttons
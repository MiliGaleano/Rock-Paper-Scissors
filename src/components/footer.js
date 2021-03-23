import React from 'react'

const Footer = ({handleOption,classic,handleRules}) => {

    const buttonText = classic ? 'LIZARD' : 'CLASSIC'
    return(
        <div className='divFooter'>
            <button onClick={handleRules} className='buttonFooter'>RULES</button>
            <button onClick={handleOption} className='buttonFooter'>{buttonText}</button>
        </div>
    )
}

export default Footer
import React from 'react'
import Logo from '../assets/logo.svg'
import Logo2 from '../assets/logo-bonus.svg'
import './styles.css'

const Header = ({classic, score}) => {
    return(
        <div className='divHeader'>
            <img src={classic ? Logo : Logo2} alt='logo' className='imgLogo'></img>
            <div className='divScore'>
                <p className='pScore'>SCORE</p>
                <h1 className='h1Score'>{score}</h1>
            </div>
        </div>
    )
}

export default Header
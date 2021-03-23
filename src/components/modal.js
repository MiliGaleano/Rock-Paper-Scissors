import React from 'react'
import Rules from '../assets/image-rules.svg'
import Rules2 from '../assets/image-rules-bonus.svg'
import Close from '../assets/icon-close.svg'

const Modal = ({classic, handleRules}) => {

    const styleNew= classic ? 'divrules' : 'divrules newV'

    return(
        <div className='divModalRules'>
            <div className={styleNew}>
                <p className='rules'>RULES</p>
                <img src={Close} alt='close' className='close' onClick={handleRules} />
            </div>
            <img src={classic ? Rules : Rules2} alt='rules' className='imgModal' />
        </div>
    )
}

export default Modal
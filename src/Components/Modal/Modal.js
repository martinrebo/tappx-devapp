import React, { useState } from 'react'
import './Modal.css'
import Form from '../Form/Form'

const Modal = ({ data }) => {

    const [toogle, setToogle] = useState(false)
    const handleClick = (e) => { setToogle(!toogle) }

    return (

        <>
            {toogle ?

                <div className="modal">
                    <button onClick={handleClick} className="btn-close"> <span role="img" aria-label="close">❌</span> </button>
                    <Form data={data} />

                </div>

                : <></>}


            <span className="btn-modal">
                <span onClick={handleClick}> <span aria-label="edit"> Edit </span>  </span>
            </span>
        </>
    )
}

export default Modal;
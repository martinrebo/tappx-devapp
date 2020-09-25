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
                    <button onClick={handleClick}> <span role="img" aria-label="close">❌</span> </button>
                    <p> Add new ROW </p>
<Form data={data} />

                </div>

                : <></>}


            <span className="modal-button">
                <span onClick={handleClick}> <span role="img" aria-label="edit"> ✏️</span>  </span>
            </span>
        </>
    )
}

export default Modal;
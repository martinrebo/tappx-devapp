import React, { useContext, useRef } from 'react'
import { store } from '../../store/store'
import './Table.css'
import Modal from '../Modal/Modal';
import Menu from '../Menu/Menu';


export default function Table({ devs }) {

    const globalState = useContext(store);
    const { dispatch } = globalState;

    // Get reference for right Click context Menu
    const outerRef = useRef(null);

    const deleteDev = (e) => {
        // TODO: Sometimes user comes without ID // See other way (Index)
        let devId = e.target.dataset.devid
        let filterDevs = devs.filter(developer => developer.id.value !== devId)
        console.log(filterDevs)
        dispatch({ type: "DELETE_DEV", payload: filterDevs })
    }
    return (
        <div ref={outerRef}>
            <Menu outerRef={outerRef} />
            <div className="grid">


                <span className="title">Name</span>
                <span className="title">City</span>
                <span className="title">Cell</span>
                <span className="title">Email</span>
                <span className="title">Edit / Delete</span>

                {devs?.map((dev, index) => {
                    return (
                        <React.Fragment key={index}>
                            <span data-id={index} >
                                {dev.name.title} {dev.name.first} {dev.name.last}
                            </span>
                            <span data-id={index} >
                                {dev.location.city}
                            </span>
                            <span data-id={index} >
                                {dev.cell}
                            </span>
                            <span className="email" data-id={index}>
                                {dev.email}
                            </span>
                            <span data-id={index} className="buttons">

                                <Modal data={dev} />
                                <span className="btn-delete"
                                    onClick={deleteDev} >
                                    <span data-devid={index}  role="img" aria-label="Delete"> ❌ </span>
                                </span>


                            </span>
                        </React.Fragment>
                    )
                })}

            </div>
        </div>
    )
}

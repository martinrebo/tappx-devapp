import React, { useContext } from 'react'
import { store } from '../../store/store'
import './Table.css'
import Modal from '../Modal/Modal';


export default function Table({ devs }) {

    const globalState = useContext(store);
    const { dispatch } = globalState;

    const deleteDev = (e) => {
        // TODO: Sometimes user comes without ID // See other way (Index)
        let devId = e.target.dataset.devid
        let filterDevs = devs.filter(developer => developer.id.value !== devId)
        console.log(filterDevs)
        dispatch({ type: "DELETE_DEV", payload: filterDevs })
    }
    return (
        <div className="grid">

            <span className="title">ID</span>
            <span className="title">Name</span>
            <span className="title">City</span>
            <span className="title">Cell</span>
            <span className="title">Email</span>
            <span className="title">Edit/Delete</span>

            {devs?.map((dev, index) => {
                return (
                    <>

                        <span key={index}>
                            {index}
                        </span>
                        <span key={index}>
                            {dev.name.title} {dev.name.first} {dev.name.last}
                        </span>
                        <span key={index}>
                            {dev.location.city}
                        </span>
                        <span key={index}>
                            {dev.cell}
                        </span>
                        <span key={index}>
                            {dev.email}
                        </span>
                        <span className="buttons" key={index}>

                            <Modal data={dev} />
                            <span
                                onClick={deleteDev} >
                                <span data-devid={index} role="img" aria-label="Delete"> ❌ </span>
                            </span>


                        </span>
                    </>
                )
            })}

        </div>
    )
}

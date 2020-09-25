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
            <div className="column">
                <span className="title">ID</span>
                {devs?.map((dev, index) => {
                    return (
                        <div key={index}>
                            {index}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span className="title">Name</span>
                {devs?.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.name.title} {dev.name.first} {dev.name.last}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span className="title">City</span>
                {devs?.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.location.city}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span className="title">Cell</span>
                {devs?.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.cell}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span className="title">Email</span>
                {devs?.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.email}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span className="title">Edit/Delete</span>
                {devs?.map((dev, index) => {
                    return (
                        <div className="buttons" key={index}>
                            
                                <Modal data={dev} />
                                <span
                                    onClick={deleteDev} >
                                    <span data-devid={index} role="img" aria-label="Delete"> ❌ </span>
                                </span>
                            

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

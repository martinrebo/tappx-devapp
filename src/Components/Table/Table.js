import React, { useState, useEffect } from 'react'
import './Table.css'


export default function Table() {
    const URL = 'https://randomuser.me/api/?results=50&inc=id,name,location,email,cell&noinfo&seed=foobar'
    const [devs, setDevs] = useState([])

    useEffect(() => {
        fetch(URL).then(res => res.json())
            .then(data => setDevs(data.results))
    }, [])

    const deleteDev = (e) => {
// TODO: Sometimes user comes without ID // See other way (Index)
        let devId = e.target.dataset.devid
        let filterDevs = devs.filter(developer => developer.id.value !== devId)
        setDevs(filterDevs)
    }
    return (
        <div className="grid">
                        <div className="column">
                <span>ID</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.id.value}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span>Name</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.name.title} {dev.name.first} {dev.name.last}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span>City</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.location.city} - {dev.location.country}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span>Cell</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.cell}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span>Email</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}>
                            {dev.email}
                        </div>
                    )
                })}
            </div>
            <div className="column">
                <span>Edit/Delete</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}>
                            <button> <span role="img" aria-label="Edit"> ✏️ </span> </button>
                            <button
                                onClick={deleteDev} >
                                <span data-devid={dev.id.value} role="img" aria-label="Delete"> ❌ </span>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import './Table.css'
export default function Table() {
    const URL = 'https://randomuser.me/api/?results=5&inc=id,name,location,email,cell&noinfo'
    const [devs, setDevs] = useState([])

    useEffect(() => {
        fetch(URL).then(res => res.json())
            .then(data => setDevs(data.results))
    }, [])
    console.log(devs)
    return (
        <div className="grid">
            <div className="column">
                <span>Name</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}> {dev.name.title} {dev.name.first} {dev.name.last}  </div>
                    )
                })}
            </div>
            <div className="column">
                <span>City</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}> {dev.location.city} - {dev.location.country} </div>
                    )
                })}
            </div>
            <div className="column">
                <span>Cell</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}> {dev.cell} </div>
                    )
                })}
            </div>
            <div className="column">
                <span>Email</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}> {dev.email} </div>
                    )
                })}
            </div>
            <div className="column">
                <span>Edit/Delete</span>
                {devs.map((dev, index) => {
                    return (
                        <div key={index}>
                            <span> ✏️ </span>
                            <span> ❌ </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

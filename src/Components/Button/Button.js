import React from 'react'
import './Button.css'

export default function Button() {
    const URL_API = ' https://randomuser.me/api/?inc=name,location,cell&noinfo'

    const handleClick = (e) => {
        fetch(URL_API)
            .then(res => res.json())
            .then(data => console.log(data))
    }


    return (
        <button onClick={handleClick} className="btn btn--primary">
            New Developer
        </button>
    )
}

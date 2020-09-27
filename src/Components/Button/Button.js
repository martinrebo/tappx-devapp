import React, { useContext } from 'react'
import { store } from '../../store/store'
import './Button.css'

export default function Button() {
    const URL_API = ' https://randomuser.me/api/?inc=id,name,gender,location,email,cell&noinfo'

    const globalState = useContext(store);
    const { dispatch } = globalState;

    const handleClick = (e) => {
        fetch(URL_API)
            .then(res => res.json())
            // .then(data => console.log(data))
        .then(data => {
            dispatch({ type: "ADD_DEV", payload: data?.results[0] })
            localStorage.setItem("devs", data?.results)
        }
           
           
        )
    }
    return (
<div style={{textAlign: "center", margin: "5% 0%"}}>
<button onClick={handleClick} className="btn btn--primary">
            New Developer
        </button>
</div>


    )
}

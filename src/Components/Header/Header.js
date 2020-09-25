import React from 'react'
import logo from '../../logo.png'
import './header.css'

export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="tappx logo" className="logo" data-testid="logo"/>
            <h1 className="title"> App Developer Manager </h1>
            <input type="text" placeholder="Search..."></input>
            <button type="submit" ><span role="img" aria-label="search">🔎</span></button>
        </header>
    )
}

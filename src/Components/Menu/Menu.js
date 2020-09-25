import React from 'react'
import useContextMenu from '../../Hooks/useContextMenu'
import './Menu.css'

const Menu = ({ outerRef }) => {
    const { xPos, yPos, menu, dataId } = useContextMenu(outerRef);

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Context Menu Test ID:", dataId)
    }
    if (menu) {
        return (
            <ul className="menu" style={{ top: yPos, left: xPos }}>
                <li onClick={handleClick}> TEST Console ID: {dataId}  </li>
            </ul>
        );
    }
    return <></>;
}

export default Menu; 
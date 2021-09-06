import React from 'react'
import "./dropbox.css"

function Dropbox({fun, closefun}) {

    const hamdleClick = () => {
        fun(false)
        closefun()
    }
    
    return (
        <>
            <div className="dropshadow" onClick={hamdleClick}></div>
        </>
    )
}

export default Dropbox

import React from 'react'
import "./Images.css"
const Images = (props) => {
    return (
        
        <div className = "img-div">
            <img className = "img-comp" width="200px" src = {props.img} alt="text" />
        </div>
        
    )
}

export default Images

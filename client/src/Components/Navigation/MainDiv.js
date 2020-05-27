import React from "react";
import "./navigation.css"

function MainDiv(props) {
    return (
        <div className="main-div">
            {props.children}
        </div>
    )
}

export default MainDiv;
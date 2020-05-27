import React from "react";
import "./navigation.css"

function BodyDiv(props) {
    return (
        <div className="body-div">
            {props.children}
        </div>
    )
}

export default BodyDiv;
import React, { useEffect, useState } from "react";
import API from "../utils/API"



const Details = (props) => {

    useEffect(() => {
        loadProject();
    }, [])

    function loadProject() {
        API.getOneProject(props.match.params.id)
            .then(result => {
                console.log(result.data)
            })
            .catch(err => console.log(err))
    }

    return (
        
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <a type="button" href={props.data.githubRep} target="_blank" className="btn btn-primary">GitHub</a>
            <a type="button" href={props.data.deployedLink} target="_blank" className="btn btn-primary">Deployed</a>


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={props.data.associatedImage} style={{width: "100%"}}className="card-img-left" alt={props.data.name} />

                    </div>
                    <div className="col-md-8">

                        <p className="card-text">Description: {props.data.description}</p>

                    </div>

                </div>
            </div>



        </div>
    </div>
)
}

export default Details;
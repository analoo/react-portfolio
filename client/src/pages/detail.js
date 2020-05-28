import React, { useEffect, useState } from "react";
import API from "../utils/API"
import NavBar from "../Components/Navigation/NavBar";
import BodyDiv from "../Components/Navigation/bodyDiv"



const Details = (props) => {

    const [project, setProject] = useState({})

    useEffect(() => {
        loadProject();
    }, [])

    function loadProject() {
        API.getOneProject(props.match.params.id)
            .then(result => {
                console.log(result.data)
                setProject(result.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <NavBar />
            <BodyDiv>


                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <a type="button" href={project.githubRep} target="_blank" className="btn btn-primary">GitHub</a>
                        <a type="button" href={project.deployedLink} target="_blank" className="btn btn-primary">Deployed</a>


                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={project.associatedImage} style={{ width: "100%" }} className="card-img-left" alt={project.name} />

                                </div>
                                <div className="col-md-8">

                                    <p className="card-text">Description: {project.description}</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </BodyDiv>
        </div>
    )
}

export default Details;
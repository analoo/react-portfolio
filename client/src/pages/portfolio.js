import React, {useEffect, useState} from "react";
import API from "../utils/API"
import Card from "../Components/Card/Card"
import BodyDiv from "../Components/Navigation/bodyDiv"


function Portfolio(){
    const [projects, setProjects] = useState([])

    useEffect(() => {
        loadProjects();
    }, [])

    function loadProjects(){
        API.allProjects("2")
        .then(res => {
            setProjects(res.data)
        })
        .catch(err => console.log(err))

    }


    return (
        <BodyDiv>

        <div>
            {projects.map(project => (
                <Card data={project} key={project.id}/>
            ))}
        </div>
        </BodyDiv>

    )
}

export default Portfolio;
import React, { useEffect, useState } from "react";
import API from "../utils/API"
import Card from "../Components/Card/Card"
import BodyDiv from "../Components/Navigation/bodyDiv"


function Portfolio() {
    const [projects, setProjects] = useState([])
    const [tools, setTools] = useState([])
    const [filtered, setFilter] = useState(false)
    const [filteredList, setFilteredList] = useState([])


    useEffect(() => {
        loadProjects();
        loadTools();
    }, [])

    function loadProjects() {
        API.allProjects("2")
            .then(res => {
                setProjects(res.data)
            })
            .catch(err => console.log(err))
    }

    function loadTools() {
        API.getTools()
            .then(res => {
                setTools(res.data)
            })
            .catch(err => console.log(err))
    }

    function filterDisplay(search) {
        setFilter(true)
        setFilteredList(projects.filter(proj => {
            let project = proj.ProjectTools
            return project.indexOf(search) >= 0
        }))


    }


    return (
        <BodyDiv>
            <div style={{ margin: "5px", padding: "2px" }}>
                <h3>Tools</h3>
                {tools.map(tools => (
                    <button type="button" className="btn btn-outline-dark" key={tools.id} name={tools.type} onClick={(e) => filterDisplay(e.target.name)}>{tools.type}</button>
                ))}
            </div>
            <div>
                <h3>Projects</h3>
                {filtered ?
                filteredList.map(project => (
                    <Card data={project} key={project.id} />
                ))
                : projects.map(project => (
                    <Card data={project} key={project.id} />
                ))
                }

                
            </div>
        </BodyDiv>

    )
}

export default Portfolio;
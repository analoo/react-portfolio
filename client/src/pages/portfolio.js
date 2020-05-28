import React, { useEffect, useState } from "react";
import API from "../utils/API"
import Card from "../Components/Card/Card"
import BodyDiv from "../Components/Navigation/bodyDiv"
import NavBar from "../Components/Navigation/NavBar";



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
        API.allProjects("1")
            .then(res => {
                setProjects(res.data)
                console.log(res.data)
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

    // function filterDisplay(search) {
    //     setFilter(true)
    //     setFilteredList(projects.filter(proj => {
    //         let project = proj.ProjectTools
    //         return project.indexOf(search) >= 0
    //     }))


    // }


    return (
        <div>
            <NavBar />
            <BodyDiv>
                {/* <div style={{ margin: "5px", padding: "2px", textAlign: "center"}}>
                        <h3 style={{textAlign: "left"}}>Tools</h3>
                        <p style={{textAlign: "left"}}>filter the projects below by using these tags</p>
                    {tools.map(tools => (
                        <button style={{ backgroundColor: "#30442b", border: "solid 1px white", margin: "1px", color: "white" }} type="button" className="btn btn-outline-dark" key={tools.id} name={tools.type} onClick={(e) => filterDisplay(e.target.name)}>{tools.type}</button>
                    ))}
                </div> */}
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
        </div>

    )
}

export default Portfolio;
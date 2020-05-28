import React, { useState, useEffect } from "react";
import BodyDiv from "../Components/Navigation/bodyDiv"
import NavBar from "../Components/Navigation/NavBar";

import API from "../utils/API"

function AboutMe() {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserData();
    }, [])

    function getUserData() {
        API.userData("2")
            .then(res =>
                setUser(res.data))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <NavBar />
            <BodyDiv>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <img src="/assets/images/AMF-2020.jpeg" style={{ width: "100%", borderRadius: "10px" }} alt="Ana Medrano Image" />
                            <a className="logo" target="_blank">{user.email} </a>
                            <p>phone: {user.phone}</p>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="row">
                                <h1>About Me</h1>
                                <p style={{lineHeight: "2", padding: "5px"}}>{user.aboutMe}</p>
                            </div>
                            <div className="row">

                                <div className="col-sm-4 col-md-3">
                                    <img className="logo" src="/assets/images/github.png" href={"https://github.com/" + user.github} target="_blank" />
                                </div>
                                <div className="col-sm-4 col-md-3">
                                    <img className="logo" src="/assets/images/linkedIn.png" href={user.linkedIn} target="_blank" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </BodyDiv >
        </div>
    )
}

export default AboutMe;
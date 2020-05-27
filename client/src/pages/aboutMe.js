import React, { useState, useEffect } from "react";
import BodyDiv from "../Components/Navigation/bodyDiv"
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
        <BodyDiv>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <img src="/assets/images/AMF-2020.jpeg" style={{width: "100%", borderRadius: "10px"}} alt="Ana Medrano Image" />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="row">
                            <h1>About Me</h1>
                            <p>{user.aboutMe}</p>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-md-4">
                                <p>phone: {user.phone}</p>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <a href={"https://github.com/" + user.github} target="_blank">github</a>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <a href={user.linkedIn} target="_blank">linkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BodyDiv >
    )
}

export default AboutMe;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css"

function Home() {

    return (
        <Link to={"/aboutMe"}>
        <div id="home-div">
             
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div id="text-div">
                <div className="col-md-12 col-sm-12 boxes" id="box-hi">
                    hi, I'm Ana
                    <div className="boxes" id="redirect">Click Anywhere to Go to My Portfolio</div>
                </div>
                <div className="col-md-12 col-sm-12 boxes" id="box-intro">
                    A full stack developer,
                    {/* <div className="circles" id="circle-2"><img src="/assets/images/circles.svg"/></div> */}
                </div>
                <div className="col-md-12 col-sm-12 boxes" id="box-passion">
                    passionate about
                    {/* <div className="circles" id="circle-3"><img src="/assets/images/circles.svg"/></div> */}
                </div>

                <div className="col-md-12 col-sm-12 boxes" id="box-people">
                    people
                    {/* <div className="circles" id="circle-4"><img src="/assets/images/circles.svg"/></div> */}

                </div>
                <div className="col-md-12 col-sm-12 boxes" id="box-culture">
                    culture
                    {/* <div className="circles" id="circle-5"><img src="/assets/images/circles.svg"/></div> */}

                </div>
                <div className="col-md-12 col-sm-12 boxes" id="box-learning">
                    learning
                    {/* <div className="circles" id="circle-6"><img src="/assets/images/circles.svg"/></div> */}

                </div>
                <div className="col-md-12 col-sm-12 boxes" id="box-connecting">
                    connecting the dots
                    <div className="circles" ><img id="circle-7" src="/assets/images/circles.svg" /></div>

                </div>
            </div>
        </div>
        </Link>
    )
}

export default Home;
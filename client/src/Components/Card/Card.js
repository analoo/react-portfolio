import React from "react";

function Card(props) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <a style={{backgroundColor: "transparent", border: "none", color: "#a7a4b3"}}type="button" href={"/project/"+props.data.id} target="_blank" className="btn btn-primary">More Details</a>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={props.data.associatedImage} style={{ width: "100%" }} className="card-img-left" alt={props.data.name} />
                            {props.data.githubRep.length > 0 ?
                    <a style={{backgroundColor: "#a0ae7e", border: "none"}}type="button" href={props.data.githubRep} target="_blank" className="btn btn-primary">GitHub</a> :
                    null
                }

                {props.data.deployedLink.length > 0 ?
                    <a style={{backgroundColor: "#a0ae7e", border: "none"}} type="button" href={props.data.deployedLink} target="_blank" className="btn btn-primary">Deployed</a> :
                    null
                }
                

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

export default Card;
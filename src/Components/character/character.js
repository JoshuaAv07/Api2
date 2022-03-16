import React from "react";
import { Link } from "react-router-dom";
import "./character.css"

const Character = (props) =>{
    const { character } = props
    return(
        <React.Fragment>
            <div class="Characters">
                <div className = "Character__container">
                <Link 
                    className="Character__image"
                    to={`characters/${character.id}`}
                >
                    <h2 className = "Character__name">{props.character.name}</h2>
                </Link>
                    <div className="Character__Data">
                        <p className = "Character__status">Gender: {props.character.sex}</p>
                        <p className = "Character__status">ID: {props.character.id}</p>
                        <p className = "Character__status">Religion: {props.character.religion}</p>
                        <p className = "Character__status">Hair: {props.character.hair_color}</p>
                        <p className = "Character__status">Occupation: {props.character.occupation}</p>
                        <small>Grade:</small>
                        <small>{props.character.grade || "NA"}</small>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Character;

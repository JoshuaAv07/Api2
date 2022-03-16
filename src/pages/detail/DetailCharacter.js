import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Http from "../../lib/request";
import "./Detail.css"

const DetailCharacter = () =>{
    const { id } = useParams();
    const [character, setCharacter] = useState({})
    //const [origin, setOrigin] = useState({})
    //const [location, setLocation] = useState({})

    useEffect(()=>{
        const fetchCharacter = async ( ) =>{
            const character = await Http.instance.get_character(id);
            setCharacter(character)
            //setOrigin(character.origin)
            //setLocation(character.location)
        }
        fetchCharacter();
    },[])

    return (
        <React.Fragment>
            <div className="Details">
                <div className="logoHolder">
                    <img className="logo" src="" alt="Rick and Morty"/>
                </div>
                <div className="Details__container">
                    <h1>{character.name}</h1>
                    <div className="Details__information">
                        <div className="Details__img">
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div className="Details__data">
                            <div className="Data__row">
                               <h3>Birth: </h3> 
                                <p>{character.birth_year  || "NA"}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Species: </h3> 
                                <p>{character.species  || "NA"}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Type: </h3> 
                                <p>{character.type || "NA"}</p>
                            </div>
                            <div className="Data__row">
                               <h3>Gender: </h3> 
                                <p>{character.sex  || "NA"}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailCharacter;

import React from "react";
import "./home.css"
import Character from "../../Components/character/character";
import Http from "../../lib/request";

class Home extends React.Component{
    state={
        title:"South Park API",
        characters:[],
    };
    
    componentDidMount = () => {
        this.getData(URL)
    };
    
    getData = async(api_url) => {
        const response = await Http.instance.get_characters()
        console.log(response)
        this.setState({ characters: response });
    };

    render(){
        return(
            <React.Fragment>
                <div className="back">
                    <div className="logoHolder">
                        <img className="logo" src="" alt="Rick and Morty"/>
                    </div>
                    <div className="Characters">
                        {this.state.characters.map((character) => {
                            return <Character character = {character} key={character.id}/>
                        } )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;

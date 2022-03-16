//const URL = "https://rickandmortyapi.com/api/character/"
//const URL = "https://pokeapi.co/api/v2/pokemon/"
//const URL = "https://swapi.dev/api/people"
//const URL = "https://swapi.dev/api/films/"
//const URL = "https://api.sampleapis.com/simpsons/episodes/"
const URL = "https://spapi.dev/api/characters/"
//const URL = "https://www.breakingbadapi.com/api/characters/"
//const URL = "https://api.jikan.moe/v4/anime/"
//const URL = "https://developers.themoviedb.org/3/movies/"

class Http{
    static instance = new Http()

    get_characters = async() =>{
        try{
            const request = await fetch (`${URL}`)
            const response = await request.json()
            return response.data
    
        }catch(err){
            throw new Error(err);
        }
    }
    get_character = async(id) => {
        try{
            const request = await fetch (`${URL}${id}`)
            const response = await request.json()
            console.log(response)
            return response
    
        }catch(err){
            throw new Error(err);
        }
    }
}
export default Http;
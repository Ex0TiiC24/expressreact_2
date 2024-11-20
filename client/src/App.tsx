import axios from "axios"
import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState([])

  const getPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
      console.log(response.data.results)
      return response.data;
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      throw error;
    }

    
  };

  

  useEffect(() => {
    getPokemon()
      .then(data => setData(data.results))
      
  }, []);

 const sprite = (key: number)=>{
    key+=1
    let base:string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    let index:string = key.toString()
    return base+index+".png"
 }

  return (
    <div className="min-h-screen w-full bg-zinc-800 text-white">
      <div className="h-56 bg-zinc-600 "></div>

      <div className="bg- flex flex-wrap flex-row gap-72 p-20 justify-center items-center">
        {data.map((pokemon,index)=> <div key={index} className="flex justify-center items-center">{pokemon.name}
      <img src={sprite(index)} alt={pokemon.name}>

      </img></div>)}</div>
    </div>
    

  );
}

  
export default App
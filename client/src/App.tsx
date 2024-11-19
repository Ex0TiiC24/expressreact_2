import axios from "axios"
import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState([])

  const getPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
      console.log(response);
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

  return (
    <div className="h-screen w-full bg-zinc-800 text-white">
      <div className="h-56 bg-zinc-600"></div>
      {data.map((pokemon)=><li class="list-none">
        {pokemon.name},{pokemon.url}
      </li>)}
    </div>
    
  );
}

  
export default App
import axios from "axios";
import { useEffect, useState } from "react";

interface pokemon {
    name: string;
    url: string;
  }
  

function Pokelist() {
  const [data, setData] = useState<pokemon[]>([]);
  
  const getPokemon = async ():Promise<{result:pokemon[]}> => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=60"
      );
      console.log(response.data.results);
      
      return response.data;
    } catch (error) {
     
      console.error("Error fetching Pokemon:", error);
      throw error;
    }
  };

  
  useEffect(() => {
    getPokemon().then((data) => setData(data.result));
  }, []);

  const sprite = (key: number) => {
    key += 1;
    let base: string =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    let index: string = key.toString();
    return base + index + ".png";
  };

  return (
    <div className=" flex flex-wrap flex-row gap-20 p-20 justify-center items-center">
      {data.map((pokemon, index) => (
        <div
          key={index}
          className="bg-white text-black flex border-4 min-h-60 justify-center items-center min-w-60"
        >
          {pokemon.name}
          <img
            className="w-50 h-50"
            src={sprite(index)}
            alt={pokemon.name}
          ></img>
        </div>
      ))}
    </div>
  );
}

export default Pokelist;

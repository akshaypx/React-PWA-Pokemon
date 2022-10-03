import { useState, useEffect } from "react";
import { getAllPokemonList } from "./api/pokemon";
function App() {
  const [PokeData, setPokeData] = useState([]);

  async function fetchAll() {
    const data = await getAllPokemonList();
    setPokeData(data?.results);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <h1 className="text-center m-5">PokeMon List</h1>
      <div className="container mt-5">
        <div className="row">
          {PokeData?.map((poke, i) => {
            return (
              <div
                key={i}
                // style={{
                //   border: "2px solid grey",
                //   borderRadius: "25px",
                //   backgroundColor: "grey",
                // }}
                className="col-sm-6 col-md-4 col-lg-3 text-center p-2"
              >
                <img
                  src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
                <p>{poke.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

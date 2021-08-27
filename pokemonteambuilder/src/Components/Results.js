import PokeCard from './PokeCard'

const Results = ({pokeResults}) =>{
    return(
        <div>
            
            {
                !pokeResults.length ? ( <p>No results</p> ) :
                ( <img src={pokeResults[0].sprites.front_default} alt="pokemon"/> )  
            }
        </div>
    );
};

export default Results


//   {!pokeResults ? (
 //   <img src="https://www.pikpng.com/pngl/m/59-590145_pokeball-8-bit-pixel-art-pokemon-clipart.png" alt="Pokeball" />
//    ) : ( 
  //   pokeResults.map(pokemon => {
  //       return(
  //          <PokeCard
 //               name={pokemon.name}
 //               key={pokemon.id}
//                type1={pokemon.types}
//                sprite={pokemon.sprites.front_default}
//        />
///         );
//     })
//)}
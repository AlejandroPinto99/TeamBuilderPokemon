import PokeCard from './PokeCard'
import NotFound from './NotFound'

const Results = ({pokeResults, notFound}) =>{


    return(
        <div className="py-1">  
            {
                notFound ? (
                        <NotFound />
                    ) :
                !pokeResults.length ? ( 
                     (
                        <span> </span>
                    )     
                
                ) :
                (   
                    pokeResults.map(pokemon => {
                        return(
                            <PokeCard
                                name={pokemon.name}
                                key={pokemon.name}
                                id={pokemon.id}
                                types={pokemon.types}
                                sprite={pokemon.sprites.front_default}
                           />
                        );
                    })
                )  
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
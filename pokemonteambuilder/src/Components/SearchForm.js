import { useState} from "react"

import Results from './Results'

const REGIONS = ['', 'Kanto', 'Johto', 'Hoenn', 'Sinoh', 'Teselia', 'Kalos', 'Alola', 'Galar']
const TYPES = ['','normal', 'water', 'grass', 'fire', 'ghost', 'dark', 'steel', 'bug', 'flying',
'rock', 'ground', 'physic', 'ice', 'fighting', 'electric', 'fairy', 'poison' ,'dragon']

const SearchForm = () => {
    const [name, setName] = useState('');
    const [region, setRegion] = useState('');
    const [type1, setType1] = useState('');
    const [type2, setType2] = useState('');
    const [pokemons, setPokemons] = useState([])
    const [notFound, setNotFound] = useState(false);

    const clearForm = () => {
        setName('')
        setRegion('')
        setType1('')
        setType2('')
        setPokemons([])
        setNotFound(false)
    }

    
    async function requestPokemonbyName(){
        try{
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );

            const json = [];
            json.push(await res.json());
            
            json[0].name = json[0].name.charAt(0).toUpperCase() + json[0].name.slice(1);
            setPokemons(json)
            setNotFound(false)
        }catch(e){
            setNotFound(true)
        }
    }

    return(
        <div className="">
            <form className="grid grid-flow-col grid-rows-2 gap-1 px-6 pb-2 rounded-lg m-3 pt-6 bg-white shadow-2xl "
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPokemonbyName();
                  }}
            >
                <div className="flex flex-col mb-3 pl-2 py-0 ">
                <label htmlFor="pokemon name" className="font-bold" >
                        Name: 
                        <input
                            id="name"
                            value={name}
                            placeholder="Pokemon's Name"
                            className="rounded-md pl-2 bg-gray-100"
                            onChange={(e)=> setName(e.target.value)}
                        />
                    </label>

                    <label htmlFor="region" className="pt-2 font-bold">
                        Region: 
                        <select 
                            id="region"
                            value={region}
                            className="ml-1.5 rounded-md bg-gray-200"
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            {REGIONS.map((region) => (
                                <option key={region} value={region}>
                                    {region}
                                </option>
                            ))} 
                        </select>
                    </label>      
                </div>
                           
                <div className="flex flex-col ">
                <label htmlFor="type 1" className="px-2 font-bold">
                        Type 1: 
                        <select 
                            id="type"
                            value={type1}
                            className="ml-1 rounded-md bg-gray-200"
                            onChange={(e) => setType1(e.target.value)}
                        >
                            {
                            TYPES.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))} 
                        </select>
                    </label>

                    <label htmlFor="type 2" className="px-2 pt-2 font-bold">
                        Type 2: 
                        <select 
                            disabled={type1 === '' ? true : false}
                            id="type"
                            value={type2}
                            className="ml-0.5 rounded-md bg-gray-200"
                            onChange={(e) => setType2(e.target.value)}
                        >
                            {
                            TYPES.map((type) => 
                                ( <option key={type} value={type}>
                                    {type}
                                </option>
                                )
                            )
                        } 
                        </select>
                    </label>
                </div>
                <div className="row-span-2 flex flex-col justify-center">
                   <button 
                        className="mb-4 mt-6 bg-gray-300 hover:bg-gray-400 rounded-md p-1"
                        type="submit"
                    >Search
                    </button> 


                   <button 
                        className="mt-4 mb-6 bg-gray-300 hover:bg-gray-400 rounded-md p-1" type="reset"
                        onClick={clearForm}
                   >
                       Clear
                    </button>
                </div> 
            </form>
            <div>
               <Results pokeResults={pokemons} notFound={notFound}/>
            </div>
        </div>
    )

}

export default SearchForm
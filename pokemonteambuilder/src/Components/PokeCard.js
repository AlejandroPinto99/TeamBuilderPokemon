
import '../index.css'

const PokeCard = ({name, id, types, sprite}) => {
    let region = '';

        console.log(name);

        if (id >= 1 && id < 152)
            region = 'Kanto';
            
        if (id > 151 && id < 252)
            region = 'Jotho'

        if (id > 251 && id < 387)
            region = 'Hoenn';
            
        if (id > 386 && id < 494)
            region = 'Sinnoh';
            
        if (id > 493 && id < 650)
            region = 'Teselia';
            
        if (id > 649 && id < 722)
            region = 'Kalos';
            
        if (id > 721 && id < 810)
            region = 'Alola';
            
        if (id > 809 && id < 891)
             region = 'Galar';
             

    return(
    <div className="flex flex-col bg-red-400 my-10 pb-20 mx-10 px-10 shadow-2xl rounded text-white relative ">
        <div className="flex flex-col" >
            <div className="flex flex-col items-center py-2">
                <h3 className="bg-red-700 px-10 rounded-md shadow-2xl font-bold">{name}</h3>
                <p className="font-bold"># {id}</p>
            </div>
            <img src={sprite} alt="sprite" className="bg-white rounded-full object-contain mb-8 shadow-2xl"/>
        </div>

        <div className="flex bg-red-700 my-4 pl-6 rounded-md shadow-xl absolute bottom-0 right-2 left-2 border-r-4 border-red-900">
                <div className="flex flex-col justify-center gap-3 py-2 pl-4">Type(s): 
                    {
                        types.map(type => (
                            <p className={`rounded-full h-7 w-24 ${type.type.name} px-4 py-0.5 text-center border`} key={type.type.name}>{type.type.name.toUpperCase()}</p>
                        ))
                    }
                </div>
                <div className="flex">
                    <p className="flex flex-col justify-between mt-2 pl-7 relative">Region:
                        <span className="absolute top-7">{region} </span>
                    </p>
                </div>
        </div>
    </div>

    )

}

export default PokeCard;
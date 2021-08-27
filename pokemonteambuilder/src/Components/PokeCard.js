
const PokeCard = ({name, key, type1, sprite}) => {
    let region = '';

    switch(key){
        case (key > 1 && key < 152):
            region = 'Kanto';
            break;
        case (key > 151 && key < 252):
            region = 'Jotho';
            break;
        case (key > 251 && key < 387):
            region = 'Hoenn';
            break;
        case (key > 386 && key < 494):
            region = 'Sinoh';
            break;
        case (key > 493 && key < 650):
            region = 'Teselia';
            break;
        case (key > 649 && key < 722):
            region = 'Kalos';
            break;
        case (key > 721 && key < 810):
            region = 'Alola';
            break;
        case (key > 809 && key < 890):
             region = 'Galar';
            break;

        default:
            region = 'Has no region'

   }

    return(
        <div>
            <h3>{name}</h3>
            <p># {key}</p>
            <img src={sprite} alt="sprite"/>
            <div>
                <p>Type: {type1}</p>
                <p>Region: {region}</p>
            </div>
            <div>
                <ul>
                    <li>Tackle</li>
                    <li>Lightning Ball</li>
                    <li>Iron Tail</li>
                    <li>Thunder</li>
                </ul>
            </div>
        </div>
    )

}

export default PokeCard;
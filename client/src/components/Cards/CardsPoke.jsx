import Card from "../Card/Card"




const CardsPoke = ({pokemons})=>{
    if(pokemons){return(
        <div >
             <Card
            key={pokemons.id}
            id={pokemons.id}
            name={pokemons.name}
            image={pokemons.image}
            type={pokemons.type}/>
        </div>        
    )}
}

export default CardsPoke
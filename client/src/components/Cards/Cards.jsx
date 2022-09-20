import Card from "../Card/Card"
import css from './Cards.module.css';



const Cards = ({pokemons})=>{
    return(
        <div className={css.container}>
            {pokemons && pokemons.map(p => <Card
            key={p.id} 
            id={p.id}
            name={p.name}
            image={p.image}
            type={p.type}/>)}
        </div>        
    )}


export default Cards
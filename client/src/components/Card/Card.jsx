import css from './Card.module.css'
import {Link} from "react-router-dom"
import './Card.css' 

const Card = ({id,name, image, type}) => {
return(
        <Link className={css.title2} to={`/pokemon/${id}`}>
    <div key={id} className={css.container} >
        <div className={css.title}>
        <h2 >{name}</h2>
        </div>
        <div className={css.img}>
        <img src={image} alt={name} />
            </div>       
        <div className={css.type2}>
            {type && type.map((t,i) => (
                <h3 className={`${t}`} key={i}>{t}</h3>
                ) )}
        </div> 
    </div>
                </Link> 
)
}

export default Card
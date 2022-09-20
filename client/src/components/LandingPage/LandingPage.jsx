import { Link } from "react-router-dom";
import pokeball from './pokeball.png';

import { useDispatch } from 'react-redux';
import css from './LandingPage.module.css'
import videos from './Pokemon.mp4'



export default function LandingPage(){    
    return(
        <div>
            <div className={css.container}>            
               <video className={css.video} src={videos}  autoPlay muted loop/>             
            </div>
            <Link to={'/home'}> 
            <input className={css.button} type="image"  src={pokeball} alt='pokeball' />                
            </Link>
            <h2 className={css.welcome}>Enter</h2>
        </div>
    )
}
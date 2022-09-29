import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { CleanDetail, GetPokemonDetail } from '../../actions/actions';
import { useNavigate, useParams } from 'react-router-dom';
import css from '../PokeDetail.jsx/PokeDetail.module.css'

export const PokeDetail = () => {
   const {id} = useParams()
   const dispatch = useDispatch();
   const detail = useSelector(state => state.pokemonDetail)   
    useEffect(()=>{
    dispatch(GetPokemonDetail(id));     
    },[dispatch,id]);
    const histori = useNavigate()

    const handlerExit = () => {     
      dispatch(CleanDetail());
      histori('/home')
    };
   
  return (
    <div className={css.container}>

      {!detail? 
       (<h1>Loading</h1>) :(
    <div >
      <div className={css.title}>
      <h1>{detail.name}</h1>
      </div>
      <div className={css.image}>

      <img src={detail.image} alt={detail.name} />
      </div>
<div>

      <h3>Id: {detail.id}</h3>
</div>
      <div className={css.speed}>
      <h3>Speed: {detail.speed}</h3>
<div></div>
      </div>
<div className={css.attack}>

      <h3>Attack: {detail.attack}</h3>
</div>
<div></div>
<div className={css.hp}>

      <h3>Hp: {detail.hp}</h3>
</div>
<div></div>
<div className={css.defense}>
  
      <h3>Defense: {detail.defense}</h3>
</div>
<div></div>
<div className={css.Height}>

      <h3>Height: {detail.height}</h3>
</div>
<div className={css.weight}>

      <h3>weight: {detail.weight}</h3>
</div>
<div className={css.types}>

      <h3>Types: {detail.types?.map(t=>t.name ).join(' - ')}</h3>
</div>
      
      
      
      
      <button onClick={handlerExit}>{'<<Exit>>'}</button>
      
    </div>)}
    </div>
  
  )
}

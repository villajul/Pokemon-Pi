import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { CleanDetail, GetPokemonDetail } from '../../actions/actions';
import { Link, useParams } from 'react-router-dom';

export const PokeDetail = () => {
   const {id} = useParams()
   const dispatch = useDispatch();
   const detail = useSelector(state => state.pokemonDetail)   
    useEffect(()=>{
    dispatch(GetPokemonDetail(id));  
    
    },[dispatch]);

    const handlerExit = () => {     
      dispatch(CleanDetail())
    };
   
  return (
    <div>

      {!detail? 
       (<h1>Loading</h1>) :(
    <div>
      <img src={detail.image} alt={detail.name} />
      <h1>{detail.name}</h1>
      <h3>Speed: {detail.speed}</h3>
      <h3>Attack: {detail.attack}</h3>
      <h3>Hp: {detail.hp}</h3>
      <h3>Defense: {detail.defense}</h3>
      <h3>Id: {detail.id}</h3>
      <h3>Type: {[detail.types].join(' - ')}</h3>
      
      
      <h3>Height: {detail.height}</h3>
      <h3>weight: {detail.weight}</h3>
      <Link to='/home'>
      <button onClick={handlerExit}>{'<<Exit>>'}</button>
      </Link>
    </div>)}
    </div>
  
  )
}

import React, { useState } from "react";
import R from './pokeball.png'
import {GetPokemon} from '../../actions/actions'
import { useDispatch } from "react-redux";
import css from './SearchBar.module.css'



export default function SearchBar(){     
   const dispatch = useDispatch()
  const [poke,setPoke] = useState('');
  console.log(poke)
  function handlerSubmit(e){setPoke(e.target.value)};
    return(
        <form onSubmit={(e) => {
          e.preventDefault();
          dispatch(GetPokemon(poke));
          setPoke('')
        }}
        className={ css.container }>
          <input
          className={ css.input }
          type="text" 
          value={poke} 
          onChange={handlerSubmit} 
          placeholder="   Pokemon name..." />
          <input className={ css.input2 } type="image" src={R} alt='pokeball'  />
        </form>
    )
}
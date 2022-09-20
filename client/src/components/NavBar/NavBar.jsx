import React from 'react'
import logo from './Pokemon-Logo.png'
import css from './NavBar.module.css'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch } from 'react-redux'
import { GetPokemon, GetPokemons } from '../../actions/actions'

const NavBar = () => { 
  const dispatch = useDispatch(); 
  const handlerHome = () => {
  dispatch(GetPokemons())
  }
  return (
        <nav>         
          <div className={css.container}>
           <div className={css.area1}>
            <Link to='/home' >
             <input type="image" src={logo} alt="logo" className={css.logo} onClick={handlerHome} />
              </Link> 
               </div>
                <div className={css.area2}>
                <Link to='/createpokemon' style= {{ textDecoration: "none" }}>
               <h2 className={css.h2}>CreatePokemon</h2>
              </Link>
             </div>          
            <div className={css.area3} >
           <SearchBar className={css.search}/>
          </div>         
         </div>       
        </nav>    
      )
}

export default NavBar
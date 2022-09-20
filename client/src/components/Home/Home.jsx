//import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import css from './Home.module.css';
import NavBar from '../NavBar/NavBar';
import {GetPokemons, GetType} from '../../actions/actions'
import Pagination from '../Pagination/Pagination';
import FilterType from '../Filter/FilterType';
import FilterPokemons from '../Filter/FilterPokemons';
import FilterAttack from '../Filter/FilterAttack';
import FilterOrder from '../Filter/FilterOrder';





const Home = () => {   
    const dispatch = useDispatch() 
    const pokemones =  useSelector((state) => state.pokemons);
    const pokemon = [ useSelector((state) => state.pokemon)];
    const [order, setOrder] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [pokePerPage] = useState(9)
    
    useEffect(()=>{
      dispatch(GetPokemons())
      dispatch(GetType())
    },[dispatch])
    
    const lastPoke = currentPage * pokePerPage;
    const firstPoke = lastPoke - pokePerPage;
    const currentPokes =  [...pokemones].slice(firstPoke,lastPoke)
    console.log('pokemones',currentPokes )
    
    const pagination = (num) => {
      setCurrentPage(num)
    }
 
    return(
        <div className={css.container}>
           <NavBar />
           <Pagination pokePerPage={pokePerPage} pokeTotal={pokemones.length} pagination={pagination}/>
           <FilterOrder setOrder={setOrder} pagination={pagination}/>
           <FilterAttack setOrder={setOrder} pagination={pagination}/>
           <FilterType />
           <FilterPokemons />
           <Cards pokemons={currentPokes} />
        </div>
    )
}
export default Home
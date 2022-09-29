import React from 'react'
import { Link } from 'react-router-dom';
import css from './Pagination.module.css'
const Pagination = ({pokePerPage, pokeTotal, pagination}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokeTotal / pokePerPage); i++) {
        
        pageNumbers.push(i)
    }
  return (
    <nav className={css.container}>
        <div className={css.container}>
            {pageNumbers.map(num => (
                <div key={num} >
                <Link className={css.num} to={num}>
                    <button onClick={()=>pagination(num)} className={css.num2}>{num}</button>
                
                </Link>
                </div>
            ))}
        </div>
    </nav>
  )
}

export default Pagination
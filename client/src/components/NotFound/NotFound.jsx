import React from 'react'
import { Link } from 'react-router-dom'
import Not from '../NotFound/maxresdefault.jpg'
import css from '../NotFound/NotFound.module.css'

const NotFound = () => {
  return (
    <div>
      <Link to={'/CreatePokemon'}>
        <div className={css.image_NotFound}>
            <img src={Not} alt="notFound" />            
        </div>
      </Link>
    </div>
  )
}

export default NotFound
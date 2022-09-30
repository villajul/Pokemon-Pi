import React from 'react'
import { useDispatch } from 'react-redux';
import { FilterByAttack } from '../../actions/actions';
import './Filter.css'
const FilterAttack = ({setOrder,pagination}) => {
    const dispatch = useDispatch()
    const HandlerSubmit = (e) => {
        e.preventDefault();
        dispatch(FilterByAttack(e.target.value));
        pagination(1);
        setOrder(`Order ${e.target.value}`)
    }
  return (
    <div>
        <select className='filtro' onChange={HandlerSubmit}>
          <option >**Order by Attack**</option>
          <option value="LOUDER">Attack(+)</option>
          <option value="LESS_STRONG">Attack(-)</option>    
        </select>
    </div>
    
  )
}

export default FilterAttack
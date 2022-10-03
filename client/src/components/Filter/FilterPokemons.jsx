
import { useDispatch } from 'react-redux';
import { FilterByPokemons } from '../../actions/actions';
import './Filter.css'


const FilterPokemons = () => {
  const dispatch = useDispatch()
  
  const handlerSubmit = (e) => {
    e.preventDefault();  
  dispatch(FilterByPokemons(e.target.value))  
}

  return (
    <div className='container'>

    <select className='filtro' name='Existent' onChange={handlerSubmit}>
        <option >**Order by Origin**</option>
        <option value="API">Api</option>
        <option value="DATA_BASE">DataBase</option>
    </select>
    </div>
  )
}

export default FilterPokemons
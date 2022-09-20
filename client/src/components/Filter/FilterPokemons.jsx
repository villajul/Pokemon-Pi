
import { useDispatch } from 'react-redux';
import { FilterByPokemons } from '../../actions/actions';

const FilterPokemons = () => {
  const dispatch = useDispatch()
  
  const handlerSubmit = (e) => {
    e.preventDefault();
  
  dispatch(FilterByPokemons(e.target.value))
  
}

  return (
    <select  name='Existent' onChange={handlerSubmit}>
        <option value="API">Api</option>
        <option value="DATA_BASE">DataBase</option>
    </select>
  )
}

export default FilterPokemons
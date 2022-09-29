import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterByType } from '../../actions/actions';

const FilterType = () => {
  const dispatch = useDispatch();
  const types = useSelector(state => state.types);
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(FilterByType(e.target.value))
    console.log(e.target.value)
}
  return (
    <div>
      <select name="Types" onChange={handlerSubmit}>
        <option >**Order by Type**</option>
        {types?.map(t =>(
          <option value={`${t.name}`}> {t.name} </option>
        ))}
      </select>
    </div>
  )
}

export default FilterType
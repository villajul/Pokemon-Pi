import { useDispatch } from "react-redux"
import { FilterByOrder } from "../../actions/actions"


const FilterOrder = ({setOrder,pagination}) => {
  const dispatch = useDispatch()
  const HandlerSubmit = (e) => {
  e.preventDefault();
  dispatch(FilterByOrder(e.target.value));
  pagination(1);
  setOrder(`Order ${e.target.value}`)
}

  return (
    <div>
    <select onChange={HandlerSubmit}>
      <option value="ASC">A-Z</option>
      <option value="DSC">Z-A</option>      
    </select>
    </div>
  )
}

export default FilterOrder
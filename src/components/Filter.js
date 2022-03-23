import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const VisibilityFilter = (props) => {

  const filter = () => {
    props.filterChange(document.querySelector('#filter').value)
  }

  return (
    <div>
      filter    
      <input 
        type="text"
        name="filter" 
        id="filter"
        onChange={() => filter()}
      />
    </div>
  )
}

export default connect(null, { filterChange })(VisibilityFilter)
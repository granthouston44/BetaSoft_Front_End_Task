import React, {Component} from 'react'

const Search = (props) => {

function handleChange(event){
  props.handleUpdate(event.target.value.substr(0, 25))
}

return(
  <div>
  <p>Search posts by user:</p>
    <input type="text" defaultValue={'enter username'} onChange={handleChange}/>
  </div>
)

}

export default Search

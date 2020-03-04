import React, {Component} from 'react'

const Search = (props) => {

function handleChange(event){
  props.handleUpdate(event.target.value.substr(0, 25))
}

return(
  <div>
    <input type="text" onChange={handleChange}/>
  </div>
)

}

export default Search

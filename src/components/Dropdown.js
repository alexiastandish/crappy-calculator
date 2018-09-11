import React from 'react'

function Dropdown(props) {
  return (
    <div className="dropdown-menu">
      <select onChange={event => props.onSelect(event.target.value)}>
        <option value="">Select an Operation</option>
        <option value="add">add</option>
        <option value="subtract">subtract</option>
        <option value="multiply">multiply</option>
        <option value="divide">divide</option>
      </select>
    </div>
  )
}

export default Dropdown

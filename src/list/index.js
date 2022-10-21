import React from 'react';

import './index.css'

const ChildList = ({persons, onTogglePress}) => {

  const elements = persons.map((name) => {
    return (
      <li key={name.id}
        onClick={() => onTogglePress(name.id)}
        >       
        {name.id}
      </li>
    )
  })

  return (
    <ul>
      {elements}
    </ul>
  )
}
  
export default ChildList
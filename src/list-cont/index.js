import React from 'react';

import './index.css'

const ListContent = ({todos}) => {
  const elements = todos.map((item) => {
    return (
      <li key={item.id}>
        {item.label}
      </li>
    )
  })

  return (
    <ul>
      {elements}
    </ul>
  )
}

export default ListContent

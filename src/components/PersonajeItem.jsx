import React from 'react'

export const PersonajeItem = ({item}) => {
  return (
    <div className='card'>
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <li>
            <strong>Actor:</strong> {item.portrayed} <br />
          </li>
          <li>
            <strong>Cumpleaños:</strong> {item.birthday} <br />
          </li>
          <li>
            <strong>Ocupación:</strong> {item.occupation} <br />
          </li>
        </div>
      </div>
    </div>
  )
}

export default PersonajeItem

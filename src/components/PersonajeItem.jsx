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
          <l1>
            <strong>Actor:</strong> {item.portrayed} <br />
          </l1>
          <l1>
            <strong>Cumpleaños:</strong> {item.birthday} <br />
          </l1>
          <l1>
            <strong>Ocupación:</strong> {item.occupation} <br />
          </l1>
        </div>
      </div>
    </div>
  )
}

export default PersonajeItem

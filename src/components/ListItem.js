import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faInr } from '@fortawesome/free-solid-svg-icons'
const ListItem = ({value,handleRemoveToCart}) => {
  return (
    <>
    <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{value.title}</div>
      
      <span> Amount {": "}
                <FontAwesomeIcon icon={faInr} /> {value.price}
              </span>
    </div>
    <button onClick={()=>{
        handleRemoveToCart(value)
    }} className="badge bg-primary rounded-pill">{<FontAwesomeIcon icon = {faTimes}/>}</button>
  </li>
    </>
  )
}

export default ListItem
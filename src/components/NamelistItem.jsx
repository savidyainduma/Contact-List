import React from 'react'

function NamelistItem(props) {
  return (
    <ul>
        <li className='list-group-item'>
          <div className='row align-items-center rounded'>
            <div className='col-2'>
            <img className='border border-dark rounded-circle shadow-sm' src={props.picture} />
            </div>
            <div className='col-10'>
            <h5>Name: {props.name}</h5>
            <p>
              {props.city} | {props.dob}
            </p>
            <small><p>Email: {props.email}</p></small>
            </div>
          </div>   
        </li>
    </ul>
  )
}

export default NamelistItem
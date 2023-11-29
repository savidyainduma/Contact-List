import React from 'react'

function NamelistItem(props) {
  return (
    <ul>
        <li><p>
            <img src={props.picture} />
            </p>
            <p>Name: {props.name}</p>
            <p>City: {props.city}</p>
            <p>Birth Date: {props.dob}</p>
            <p>Email: {props.email}</p>
             
            
        </li>
    </ul>
  )
}

export default NamelistItem
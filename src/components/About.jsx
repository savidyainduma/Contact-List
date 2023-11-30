import React from 'react'
import react from "./react.png"
import api from "./api.png"
import ab from "./ab.jpg"

function About() {
  return (
    <div style={{ backgroundImage: `url(${ab})`, height:'610px' }}>
        <div className='container' >
        <h3 className='text-white'>About</h3>
        <hr className='text-white'/>
        <p className='text-light'>
            This is a simple react web application that use randomuser Api for create new names when we click a button. I created this application for get an idea about Api calling and react routing.
        </p>
        <div className='row mt-10'>
            <div className='col-md'><img className="img-fluid " src={api} /></div>
            <div className='col-md'><img className="img-fluid " src={react} /></div>
        </div>
    </div>
    
    </div>
  )
}

export default About
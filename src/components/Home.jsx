import React from 'react'
import bg from "./bg.jpg"

function Home() {
  return (
    <div className="img-fluid  " style={{ backgroundImage: `url(${bg})`, height:'610px' }}>
     <div className='container ' >
        <h3 className='text-white'>Welcome</h3>
        <hr className='text-white'/>
        <p className='text-light'>
            Welcome to Contact List. 
        </p>
    </div>
    </div>
    
  )
}

export default Home;
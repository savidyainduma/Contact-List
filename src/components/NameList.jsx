import React from 'react'
import NamelistItem from './NamelistItem'

function NameList() {
  const nameList = [{
    id: 1,
    name: {
      first: "Edouard",
      last: "Bernard"
    },
    location: {
      city: "Avignon"
    },
    email: "edouard.bernard@example.com",
    dob: {
      date: "1995-03-03",
    },
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
    }

  },
  {
    id: 2,
    name: { first: "Lauren", last: "Weaver" },
    location: { city: "Shannon"},
    email: "lauren.weaver@example.com", 
    dob: {date: "1974-02-09"},
    picture: {medium: "https://randomuser.me/api/portraits/med/women/48.jpg"}
  },
  {
    id: 3,
    name: { first: "Stanoje", last: "Ivanović" },
    location: { city: "Smederevska Palanka"},
    email: "stanoje.ivanovic@example.com", 
    dob: {date: "1970-02-14"},
    picture: {medium: "https://randomuser.me/api/portraits/med/men/74.jpg"}
  }
]

const nameListComponent = ()=>{
  return nameList.map((aName)=> {
    return(
      <NamelistItem
      key={aName.id}
      name={aName.name.first+" "+ aName.name.last}
      city={aName.location.city}
      email={aName.email}
      dob={aName.dob.date}
      picture={aName.picture.medium}
  
         />
    )
  })
  
}

  return (
    <div>
      <div className='container mt-4'>
      <ul className='list-group'>
            {nameListComponent()}         
        </ul>
      </div>
        
        
    </div>
    
  )
}

export default NameList
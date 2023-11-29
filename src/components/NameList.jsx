import React, {useState, useEffect} from 'react'
import NamelistItem from './NamelistItem'

function NameList() {
  const [loadData, setLoadData] = useState(new Date())
  const [nameList, setNameList] = useState([{
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
]);
useEffect(() => {
  fetch('https://randomuser.me/api')
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    setNameList((nameList)=> [...nameList, responseData.results[0]]);
  });
}, [loadData]);

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

const addUserHandler = ()=> {
  
  setLoadData(new Date());
};

  return (
    <div>
      <div className='container mt-4'>
        <button className='btn btn-primary mb-2' onClick={addUserHandler}>Add Name</button>
      <ul className='list-group'>
            {nameListComponent()}         
        </ul>
      </div>
        
        
    </div>
    
  )
}

export default NameList
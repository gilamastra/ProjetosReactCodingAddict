import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
const [people, setPeople] = useState(data)
const clearAll = () =>{
  setPeople([])
}
  return (
  <main>
    <div className="container">
      <h3>{people.length} birthdays today</h3>
      {people.map((peoples) => {
        const {id,name,age,image} = peoples
        return(
        <div key={id} className="person">
          <img src={image} alt=""/>    
          <div className="flex">
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </div>
        )
      })}
      <button onClick={clearAll}>Clear All</button>
    </div>
  

  </main>
    )
}

export default App;

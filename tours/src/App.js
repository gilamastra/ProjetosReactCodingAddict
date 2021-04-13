import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {


const url = 'https://course-api.com/react-tours-project'
const [loading, isLoading] = useState(true);
const [tours,setTours] = useState([])

 const fetchTours = async () => {
   isLoading(true)
   try {
     const response = await fetch(url)
     const tours = await response.json()
     isLoading(false)
     setTours(tours)

     //  setTours(tours)
    } catch (error) {
      isLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours()
  },[])

  if(loading){
    return (
      <Loading/>
    )
  }

  if(tours == 0){
    return(
       <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return(
    <main>
        <Tours tours={tours} setTours={setTours}/>
        
        
        
    </main>
      
    )
}

export default App

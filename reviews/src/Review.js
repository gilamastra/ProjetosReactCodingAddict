import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [person, setPeople] = useState(people)
  const [display,setDisplay] = useState(1)

  const prevDisplay = () =>{
    setDisplay(display - 1)
    if(display == 1){
      setDisplay(person.length)
    }
  }
  const nextDisplay = () =>{
    setDisplay(display +  1)
    if(display == person.length){
      setDisplay(1)
    }
  }
  const randomDisplay = () =>{

  let randomIndex = Math.floor(Math.random() * (person.length)+1)
  setDisplay(randomIndex)
  if(randomIndex == display ){
    randomIndex = display + 1
      if(randomIndex > person.length){
        setDisplay(1)
      }
  }
  }


  return (
    <div className="container">
      {person.map((person)=>{
        const {name,text,image,job,id} = person
        if(person.id == display){

          return(

        <div key={id} className="review">

          <div className="img-container">
            < img className="person-img"src ={image}alt = "" / >
            <div className="quote-icon">
              <FaQuoteRight/>
            </div>
          </div>
          <div className="author">
            <h4>{name}</h4>
            <p className="job">{job}</p>
            <div className="info">
              <p>{text}</p>
              <button onClick={prevDisplay} className="prev-btn">
                <FaChevronLeft/>
              </button>
              <button onClick={nextDisplay} className="next-btn">
                <FaChevronRight/>
              </button>
            </div>
              <button onClick={randomDisplay} className="random-btn">
                Surprise Me
              </button>
          </div>

        </div>
          )
        }

      })}
    </div>

  )
 
}
  
export default Review;

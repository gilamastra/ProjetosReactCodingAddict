import React , {useState} from 'react';
import Tour from './Tour';
const Tours = ({tours,setTours}) => {
    const [readMore, setReadMore] = useState(false);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
      }

  return(
      <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
    
    {tours.map((tour)=>{
      var  {id,name,info,image,price} = tour
     return(
       <div key={id} className="single-tour">
        <img src={image} alt=""/>
        <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
        {readMore ? info : `${info.substring(0,200)}...`}
        <button onClick={(()=>{
          setReadMore(!readMore)})}>{readMore ? 'Show Less' : 'Read More'}</button>
        </p>

        <button onClick={(()=>{
          removeTour(id)
        })} className="delete-btn">
          Not Interested
        </button>
      
        </footer>
      </div>
     

    ) 
       
    })}
   
   
   
    </section>
   
   
   
   
   )
};

export default Tours;

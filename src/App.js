import React, { useEffect, useState } from 'react'
import {Loading, Tours} from './Components/index'

//url
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading , setLoading] = useState(true);
  const [tours , setTours] = useState([]);

  const removeTour = (id)=>{
      const newTour = tours.filter((tour)=> tour.id !== id);
      setTours(newTour);   
  }
  

  const fetchData = async () =>{
    setLoading(true)

    try {  
      const response = await fetch(url);
      const tours = await response.json()
      setLoading(false);
      setTours(tours);
    
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if(loading){
    <main>
      <Loading />
    </main>
  }

  return(
    <main>
      <Tours tours = {tours} removeTour={removeTour} />
    </main>
  )
}

export default App;

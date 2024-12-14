import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const[search,setSearch]=useState("coimbatore");
  const[city,setCity]=useState("");
    
  
    const getWeatherData=async()=>{
      let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=24dcb21fb20bd40124840a576d2387e1&units=metric`);
      let result = await response.json();
      setCity(result);
      
      
    }
   
    useEffect(()=>{
      getWeatherData();
      
      
    },[search])
    


   return (
    <div className='container'>
      <div className='textbox1'>
        <input type='text' spellCheck="false"  placeholder='Enter City Name' onChange={(e)=>setSearch(e.target.value)}></input>
      </div>
      <div className='icon1'>
        <img src='https://cdn-icons-png.flaticon.com/128/3799/3799996.png' alt='logo1'></img>
      </div>
      <div className='result1'>
      <h1>{city?.main?.temp}C</h1>
      <h3>{city?.name}</h3>
      <div className='result2'>
        <div className='part1'>
          <div>
             <img src='https://cdn-icons-png.flaticon.com/128/5664/5664996.png' alt='humidity'></img>
          </div>
          <div>
          <h4>{city?.main?.humidity}</h4>
          <h5>Humidity</h5>
          </div>
        </div>
        <div className='part2'>
          <div>
             <img src='https://cdn-icons-png.flaticon.com/128/9367/9367416.png' alt='wind'></img>
          </div>
          <div>
          <h4>{city?.wind?.speed}</h4>
          <h5>Wind speed.</h5>
          </div>
        </div>
      </div>
      </div>
      
      
        
    </div>     

    
  )
}

export default App
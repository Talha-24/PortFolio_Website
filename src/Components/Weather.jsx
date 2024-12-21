import React, { useEffect } from 'react'
import "./Weather.css"
import Search from "../assets/search.png";
import Clear from "../assets/clear.png";
import Cloud from "../assets/cloud.png";
import Drizzle from "../assets/drizzle.png";
import Humidity from "../assets/humidity.png";
import Rain from "../assets/rain.png";
import Snow from "../assets/snow.png";
import Wind from "../assets/wind.png"
import axios from 'axios';
const Weather = () => {
    const search= async  (city,state,country)=>{
       
            const url=`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${10}&appid=${import.meta.env.VITE_APP_ID}`;
            let response= await axios (url);
            console.log(response);

            // console.log("Response : ",response);
            // let data= await  response.json();
            // console.log("JSON Data ",data);
            
     
            
        
      



    }
    useEffect(()=>{
        search("London","PK-PB","92");

    },[])
    
    
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder="Search" />
            <img src={Search} alt="" />
        </div>  
        <img src={Clear} alt="" className='weathericon'/>  
        <p className="temperature">23 c</p>
        <p className="location">London</p>
        <div className="weather-data">
            <div className="col">
                <img src={Humidity} alt="" />
                <div>
                    <p>91%</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={Wind} alt="" />
                <div>
                <p>4km/h</p>
                <span>Wind Speed</span></div>
            </div>
        </div>
    </div>
  )
}

export default Weather
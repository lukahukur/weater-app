import React, { useEffect } from "react";
import { useGetWeatherDataQuery } from "./store/weatherData";
import './css/index.css'
import searchIcon from './icons/1.png'


function App() {

 const srchRef = React.useRef(null);
 const [location,setLocation] = React.useState('London');
 const [d,setD] = React.useState([[],{doNotRender:true}]);
 const {data =[],isError} = useGetWeatherDataQuery({city:location,type:'weather'});

 useEffect(()=>{
  function entr(e){
    if(e.which === 13){
    setLocation(srchRef.current.value)
    }
  }
  document.addEventListener('keypress',entr)
  return ()=>{
    document.removeEventListener('keypress',entr)
  }
 },[])

   useEffect(()=>{
   if(data.message === undefined){
    data.length!== 0&& setD(
      [[data.main,data.weather,data.clouds,data.wind],{doNotRender:false}]
      )
    }
    
  },[data]);
 
  function city(){
    setLocation(srchRef.current.value)
  }
  return (
    <div className='app'>
     
      <div className="search">
   
        <div className="srch">
         <input autoComplete="off" ref={srchRef} placeholder="City" type='text' id='search'></input>
         <div id='w' onClick={()=>{city()}}>
         <img src={searchIcon} id='s_i'  />
         </div>

        </div>
      {data.message !== 'city not found' ?
        
        <div className="info">
         {d[0].length !== 0 &&
         <>
        <div className="bg">Weather in {location}</div>
          
      
        <div id='temp'>{d[0][0].feels_like}°C</div>
      
      <img id='wthr'src={`https://openweathermap.org/img/wn/${d[0][1][0].icon}@2x.png`}/>
            <div id='otherInfo'>
                  <div> {d[0][1][0].description} </div>
                  <div>Humidity: { d[0][0].humidity}%</div>
                  <div>Wind speed:{d[0][3].speed} km/h</div>
           
             </div>
    </>}
        </div>
        
        :<div id='err'>City is not found </div>
       
    }
    
      </div>

    </div>
  );
}

export default App;

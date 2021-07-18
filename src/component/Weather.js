import React from "react";
  const Weather=(props)=>{
    return(
        <div>
            {props.tempreture && <p> tempreture :{Math.floor(props.tempreture-273.15)}</p>}
            <p> city : {props.city}</p>
            <p> country : {props.country}</p>
            <p> humidity : {props.humidity}</p>
            <p> description : {props.description}</p>
            <p>{props.error}</p>
        </div>
    )
    
  } 

export default Weather;
import React from "react";
  const Weather=(props)=>{
    return(
        <div className="info">
            {props.tempreture && <p> 
              tempreture : 
              <span className="info-value">{Math.floor(props.tempreture-273.15)}</span>
              </p>}
              
              {props.tempreture && <p> 
                feels like : 
              <span className="info-value">{Math.floor(props.feelslike-273.15)}</span>
              </p>}

              {props.tempreture && <p> 
                temp min : 
              <span className="info-value">{Math.floor(props.tempmin-273.15)}</span>
              </p>}

             
            <p className="info-key">
              City :
             <span className="info-value">{props.city}</span> 
            </p>
            <p className="info-value">
              Country :
              <span className="info-value">{props.country}</span>
              </p>
            <p className="info-value"> 
              humidity : 
              <span className="info-value">{props.humidity}</span>
              </p>
            <p className="info-value"> 
              description : 
              <span className="info-value"> {props.description}</span>
              </p>
            <p className="info-value">
              {props.error}
              </p>
        </div>
    )
    
  } 

export default Weather;
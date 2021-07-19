import { Component } from 'react';
import './App.css';
import Weather from './component/Weather';
import Form from './component/Form';
import { Footer } from './component/Footer';
const APIKey='fe88e17f0bf5e600ee23c9a380f63700';
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  state={
    tempreture:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  getWeather=async (e)=>{
    // non Reload page 
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`);
    const data=await api.json();
    if (city&&country) {
      this.setState({
        tempreture:data.main.temp,
        feels_like:data.main.feels_like,
        temp_min:data.main.temp_min,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
      })
    } else {
      this.setState({
        tempreture:'',
        feels_like:'',
        temp_min:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'please Enter County'
      })
      
    }
   
  }
  render(){
    return(
        <div className="weather"> 
          <div className="form-container">
          <Form getWeather={this.getWeather}/>
            <Weather
              tempreture={this.state.tempreture}
              feelslike={this.state.feels_like}
              tempmin={this.state.temp_min}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
              />     
          </div>
      </div>
    )
  }
}

export default App;

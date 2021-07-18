import { Component } from 'react';
import './App.css';
import Weather from './component/Weather';
import Form from './component/Form';
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
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`);
    const data=await api.json();
    if (city&&country) {
      this.setState({
        tempreture:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
      })
    } else {
      this.setState({
        tempreture:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'please Enter Countyry'
      })
      
    }
   
  }
  render(){
    return(
        <div className="App">  
          <Weather
           tempreture={this.state.tempreture}
           city={this.state.city}
           country={this.state.country}
           humidity={this.state.humidity}
           description={this.state.description}
           error={this.state.error}
          />
          <Form getWeather={this.getWeather}/>
        </div>
    )
  }
}

export default App;

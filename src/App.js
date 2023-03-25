import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountris></LoadCountris>
    </div>
  );
}

function LoadCountris (){
  const [countries, setCountries] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  },[])
  return ( 
    <div>
      <h1>Welcome to Rest Countries</h1>
      <h1>Available Countries: {countries.length}</h1>
      <div  class="country-container">
      { 
        countries.map(country => <Country name={country.name.common} population={country.population} area={country.area}
       flags= {country.flags}
        ></Country>)
      }     
      </div>
    </div>
  )
}

function Country(props){
  return (
    <div className='country'>
      <h2>Name: {props.name}</h2>
      <img src={props.flags.png} />
      <h3>Population: {props.population}</h3>
    </div>
  )
}

export default App;

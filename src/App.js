import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (search !== "") {
      fetch(`https://restcountries.com/v3.1/name/${search}`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(response => setCountries(response))
      .catch(error => console.log(error))
    }
    
  }, [search, countries])

  return (
    <div className="App">
      <form>
        <input className='country-bar' type="text" name="country-researcher" onChange={e => setSearch(e.target.value)} />
        <input className='submit-btn' type="submit" value="Lancer la recherche" />
      </form>
      <div className='div-result'>
        <h2>Résultats de recherche</h2>
        {search !== "" ?
          countries.map((country) =>
            <div className='div-country' key={country.name.official}>{country.name.official}</div>
          ) 
          : 
          <div className='div-country'></div>}
      </div>
    </div>
  );
}

export default App;

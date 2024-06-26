import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'


export default function SearchCountries() {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")

    // let searchParams = new URLSearchParams(`https://restcountries.com/v3.1/name`);
    // let checkParams = searchParams.has(`${search}`)

    useEffect(() => {
        if (search.length > 0) {
        fetch(`https://restcountries.com/v3.1/name/${search}`)
        .then(response => response.json())
        // .then(console.log(checkParams))
        // .then(data => console.log(data))
        .then(json => {
            if (Array.isArray(json)) {
            setCountries(json);
            } else {
            setCountries([]);
            }
        })
        } else {
        setCountries([])
        }
    }, [search])

    return (
        <div className="App">
        <form>
            <input className='country-bar' type="text" name="country-researcher" onChange={e => setSearch(e.target.value)} />
            <input className='submit-btn' type="submit" value="Lancer la recherche" />
        </form>
        <div className='div-result'>
            <h2>Résultats de recherche</h2>
            {countries.map((country) =>
                <div className='div-country' key={country.name.official}>{country.name.official} {country.flag}</div>
            )}
        </div>
        </div>
    );
}

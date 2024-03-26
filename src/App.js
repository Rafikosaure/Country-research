import './App.css';

function App() {




  return (
    <div className="App">
      <form>
        <input className='country-bar' type="text" name="country-researcher" id="" />
        <input className='submit-btn' type="submit" value="Lancer la recherche" />
      </form>
      <div className='div-result'>
        <h2>Résultats de recherche</h2>
        <p></p>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';


function App() {
  
  return (
    <BrowserRouter basename='/App'>
      <Routes>
        <Route path='/' />
        <Route path='/search' element={Search} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

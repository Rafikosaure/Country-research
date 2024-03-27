import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/apartment/:apartmentId" element={<Apartment />} /> */}
                <Route path="/search" element={<Search />} />
                {/* <Route path="*" element={<Error />} /> */}
            </Routes>
        </Router>
    </React.StrictMode>
)
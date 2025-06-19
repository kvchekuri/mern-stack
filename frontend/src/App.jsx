import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import { useState } from "react";

import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </Router>
    </>
  )
}

export default App;

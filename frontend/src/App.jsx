import Header from './components/Header';
import { useState } from "react";

import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Signup from './pages/Auths/Signup';
import Contact from './pages/Contact/Contact';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
     </Router>
     <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App;

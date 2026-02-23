import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import './App.css'
import Navbar from './Components/layout/Navbar';
import WhatsAppButton from './Components/ui/WhatsAppButton';

import Home from './screens/Home';
import Products from './screens/Product';
import Contact from './screens/Contact';

function App() {

  return (
  <BrowserRouter>
  <Navbar brand="DevMarket" />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>

    <WhatsAppButton />

     </BrowserRouter>
    

  );
}

export default App;



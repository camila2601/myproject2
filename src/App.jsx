import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfileCard from './profilecard/components/ProfileCard';

import { useState } from 'react'
import './App.css'
import './profilecard/App.css'
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
    <Route path="/" element={
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem' }}>
        <div style={{ flex: 1, minWidth: 320, maxWidth: 600 }}>
          <Home />
        </div>
        <ProfileCard
          name="Camila Angarita"
          description="Estudiante de la tecnología en desarrollo de software en la Uniminuto."
          followers="312"
          projects="48"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          verified={true}
        />
      </div>
    } />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

    <WhatsAppButton />

     </BrowserRouter>
    

  );
}

export default App;



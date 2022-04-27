import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.min.js'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Credit from './components/Credit';
import ImageEditing from './components/ImageEditing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/credit" element={ <Credit /> } />
        <Route path="/image/edit" element={ <ImageEditing /> } />
      </Routes>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/Header';
import Home from './components/Home';
import ImageEditing from './components/ImageEditing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>

      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/image/edit" element={ <ImageEditing /> } />
      </Routes>

    </React.Fragment>
  );
}

export default App;

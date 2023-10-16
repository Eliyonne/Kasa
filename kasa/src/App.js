import React from "react";
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Page404 from './Pages/Page404';
import Apropos from './Pages/Apropos';
import Logements from './Pages/Logements';
import Navbar from "./Composants/Navbar/Navbar";



function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/404" element={<Page404 />}/>
      <Route path="/A-propos" element={<Apropos />}/>
      <Route path="/fiche-logement/:id" element={<Logements />}/>
      <Route path="/fiche-logement/*" element={<Page404 />}/>
      <Route path="/*" element={<Page404 />}/>
    </Routes>
    </div>
  );
}

export default App;

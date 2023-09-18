import React from "react";
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Page404 from './Pages/Page404';
import Apropos from './Pages/Apropos';
import Logement from './Pages/Logement';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/404" element={<Page404 />}/>
      <Route path="/A-propos" element={<Apropos />}/>
      <Route path="/fiche-logement/:id" element={<Logement />}/>
      <Route path="/fiche-logement/*" element={<Page404 />}/>
      <Route path="/*" element={<Page404 />}/>
    </Routes>
      
    </div>
  );
}

export default App;

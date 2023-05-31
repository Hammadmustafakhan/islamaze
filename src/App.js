import React from "react";

import Home from "./component/home/home";
import Hadis from "./component/hadis-book/hadis";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>

  
   
      <BrowserRouter>``
    
        <Routes>
        
        <Route path="/" element={<Home/>} />
<Route path="/hadis" element={<Hadis/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

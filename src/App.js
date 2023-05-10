import React from "react";
import Index1 from './pages/Index1/Index1.js'
import Index2 from './pages/Index1/Index2.js'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Index1 />} />
        <Route path='/special' element={<Index2 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

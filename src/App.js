import React from "react";
import Index1 from './pages/Index1/Index1.js'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Index1 />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

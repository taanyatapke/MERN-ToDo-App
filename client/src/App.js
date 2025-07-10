import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Edit from './pages/edit';
const App = () => {
  return (
  <>
  <Routes>
    <Route path = "/" element= {<Home/>}/>
    <Route path = "/edit/:id" element= {<Edit/>}/>
  </Routes>
  </>
  );
};

export default App;

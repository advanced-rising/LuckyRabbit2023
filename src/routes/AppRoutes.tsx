import Home from 'pages/Home';
import SignUp from 'pages/SignUp';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
  );
};

export default AppRoutes;

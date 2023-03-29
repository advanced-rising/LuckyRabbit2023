import Home from 'pages/Home';
import Select from 'pages/Select';
import Send from 'pages/Send';
import SignUp from 'pages/SignUp';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/select' element={<Select />}></Route>
      <Route path='/send' element={<Send />}></Route>
    </Routes>
  );
};

export default AppRoutes;

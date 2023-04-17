import Home from 'pages/Home';
import List from 'pages/List';
import Select from 'pages/Select';
import Send from 'pages/Send';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/select' element={<Select />}></Route>
      <Route path='/send' element={<Send />}></Route>
      <Route path='/list' element={<List />}></Route>
    </Routes>
  );
};

export default AppRoutes;

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../Layouts';
import AddBlog from '../Pages/AddBlog';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PrivateRoute from '../Components/PrivateRoute';
import FullBlog from '../Pages/FullBlog';
import SearchBlog from '../Pages/SearchBlog';

const Navigator = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(0);

  // const userId  = sessionStorage.getItem('userId');
  // console.log("UserId", userId);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" 
            element={
            <PrivateRoute >
              <Home />
            </PrivateRoute>
            } 
        />
        <Route path="/add-blog" 
            element={
            <PrivateRoute >
              <AddBlog />
            </PrivateRoute>
            } 
        />
        <Route path="/full-blog/:blogId" 
            element={
            <PrivateRoute >
              <FullBlog />
            </PrivateRoute>
            } 
        />
        <Route path="/search-blog/:searchText" 
            element={
            <PrivateRoute >
              <SearchBlog />
            </PrivateRoute>
            } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigator;

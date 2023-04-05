import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children}) => {
  const userId  = sessionStorage.getItem('userId');
  // console.log("UserId", userId);
  if (userId != 1 && userId != 0 && userId != 3) {
    return <Navigate to='/login' />;
  }

  // if (
  //   (!email || !displayName) &&
  //   to !== '/add-user-details' &&
  //   to !== '/onboarding'
  // ) {
  //   return <Navigate to='/add-user-details' />;
  // }

  return children;
};

export default PrivateRoute;

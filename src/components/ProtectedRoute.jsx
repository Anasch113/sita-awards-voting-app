import React from 'react'
import { Navigate } from 'react-router-dom';
import {useAuth} from "../../auth/AuthProvider"

const ProtectedRoute = ({children}) => {
  let{ user }= useAuth();
  console.log(user)
  if(!user){
return <Navigate to= "/login"/>
  }

  return children;
}
export default ProtectedRoute;
import React, { useContext } from "react";;
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Loading from "./Loading";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading){
    return <Loading/>
  }
  if (user) {
    return children;
  }
  return <Navigate state={{location : location.pathname}} to="/auth/login"></Navigate>;
}

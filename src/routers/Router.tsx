import React from "react";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";
import { authSelector, AuthTypeState } from "../redux/reducers/authReducer";
import { useSelector } from "react-redux";

const Router = () => {
  const auth: AuthTypeState = useSelector(authSelector);
  console.log(auth);
  return !auth ? <AuthRouter /> : <MainRouter />;
};

export default Router;

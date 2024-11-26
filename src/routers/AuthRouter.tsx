import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auths/Login";
import SignUp from "../screens/auths/SignUp";

const AuthRouter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>KANKIS</h1>
        </div>
        <div className="col d-flex justify-content-center align-items-center vh-100">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;

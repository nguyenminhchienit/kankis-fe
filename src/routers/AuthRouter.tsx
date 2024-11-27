import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auths/Login";
import SignUp from "../screens/auths/SignUp";
import { Image } from "antd";
import Title from "antd/es/typography/Title";

const AuthRouter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-none d-lg-flex justify-content-center align-items-center">
          <div>
            <Image
              width={300}
              preview={false}
              src="https://res.cloudinary.com/dubz32w0z/image/upload/v1732695086/kankis/logo_odkwmb.png"
            />
            <Title
              className="text-center fw-bold"
              style={{ color: "#F15E2B" }}
              level={1}
            >
              KANKIS SHOP
            </Title>
          </div>
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

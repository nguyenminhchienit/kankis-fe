import React from "react";
import "./App.css";
import Router from "./routers/Router";
import { ConfigProvider, message } from "antd";

message.config({
  top: 30,
  duration: 2,
  maxCount: 3,
  rtl: true,
  prefixCls: "my-message",
});

function App() {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorTextHeading: "#F15E2B",
            colorPrimary: "#F15E2B",
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </div>
  );
}

export default App;

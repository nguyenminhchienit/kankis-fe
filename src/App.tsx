import React from "react";
import "./App.css";
import Router from "./routers/Router";
import { ConfigProvider } from "antd";

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

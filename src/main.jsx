import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import ThemeProvider from "./provider/theme/themeProvider";
// import AuthProvider from "./provider/Auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <AuthProvider> */}
      <RouterProvider router={router} />
      {/* </AuthProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);

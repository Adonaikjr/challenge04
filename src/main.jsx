import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { GlobalStyle } from "./Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResultPlantPay, { ResultContext } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ResultPlantPay>
          <GlobalStyle />
          <ToastContainer position="top-right" autoClose={3000} />
          <AppRoutes />
        </ResultPlantPay>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './routes';
import { GlobalStyle } from './Global'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <GlobalStyle/>
        <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {router} from "./components/router";
import {RouterProvider} from "react-router-dom";
import {SessionProvider} from "./providers/session-context";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SessionProvider>
              <RouterProvider router={router} />
              <App />
          </SessionProvider>
      </LocalizationProvider>
  </React.StrictMode>
);



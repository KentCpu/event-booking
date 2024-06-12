import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {router} from "./components/router";
import {RouterProvider} from "react-router-dom";
import {SessionProvider} from "./providers/session-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <SessionProvider>
          <RouterProvider router={router} />
        <App />
      </SessionProvider>
  </React.StrictMode>
);



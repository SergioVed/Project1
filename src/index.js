import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { Header } from './components';
import { HomePage } from './components/homePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

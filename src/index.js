import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { HomePage } from './components/homePage';
import { AllGames } from './components/all games';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllGames/>
  },
  // {
  //   path: "/allGames",
  //   element: <AllGames/>
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

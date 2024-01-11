import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { HomePage } from './components/homePage';
import { AllGames } from './components/all games';
import { CardPageComponent } from './components/all games/components/card-page-component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/AllGames",
    element: <AllGames/>
  },
  {
    path: "/AllGames/Page/:gameId",
    element: <CardPageComponent/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

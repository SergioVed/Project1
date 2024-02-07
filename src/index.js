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
import { AboutUs } from './components/aboutUs';
import { ContactUs } from './components/ContactUs'
import {Helmet} from "react-helmet";

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
    path: "/AllGames/Page/:id",
    element: <CardPageComponent/>
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>
  },
  {
    path: "/contactUs",
    element: <ContactUs/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
    <Helmet>
      <title>FreeToGame</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  </>
);

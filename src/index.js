import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectsPage';
import Aquarium from './Aquarium/Aquarium';
import HomePage from './pages/HomePage';
import ProjectDetails from './pages/projects/ProjectDetails';
import pipeHackerDetails from './pages/projects/details/pipeHackerDetails';
import swordGameDetails from './pages/projects/details/swordGameDetails';
import siteDetails from './pages/projects/details/siteDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/projects",
        element: <ProjectPage />
      },
      {
        path: "/projects/pipe-hacker-ii/about",
        element: <ProjectDetails projectDetails={pipeHackerDetails}/>
      },
      {
        path: "/projects/untitled-sword-game/about",
        element: <ProjectDetails projectDetails={swordGameDetails}/>
      },
      {
        path: "/projects/site/about",
        element: <ProjectDetails projectDetails={siteDetails} />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/projects/aquarium/play",
        element: <Aquarium />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

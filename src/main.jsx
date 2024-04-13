import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppContext from './store/AppContext.jsx';
import App from './App.jsx';
import './index.css';

import Home from '/src/pages/Home';
import Projects from '/src/pages/Projects';
import Experience from '/src/pages/Experience';
import Qualification from '/src/pages/Qualification';
import About from '/src/pages/About';
import Contact from '/src/pages/Contact';
import AppLayout from './ui/AppLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/qualification',
        element: <Qualification />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AppContext>
  </React.StrictMode>
);

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppContext from './store/AppContext';
import AppLayout from './ui/AppLayout';

import Home from '/src/pages/Home';
import Projects from '/src/pages/Projects';
import Experience from '/src/pages/Experience';
import Qualification from '/src/pages/Qualification';
import About from '/src/pages/About';
import Contact from '/src/pages/Contact';

export default function App() {
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
  return (
    <AppContext>
      <RouterProvider router={router}>
        <AppLayout />
      </RouterProvider>
    </AppContext>
  );
}

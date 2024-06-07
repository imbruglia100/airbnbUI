import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import * as sessionActions from './store/session';
import SpotsGallery from './components/SpotsGallery/SpotsGallery';
import SpotDetailPage from './components/SpotDetailPage/SpotDetailPage';
import CreateSpotPage from './components/CreateSpotPage/CreateSpotPage';
import ManageHutsPage from './components/ManageHutsPage/ManageHutsPage';

function Layout() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Outlet />}
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SpotsGallery />
      },
      {
        path: '/huts/create',
        element: <CreateSpotPage />
      },
      {
        path: '/huts/manage',
        element: <ManageHutsPage />
      },
      {
        path: '/huts/:spotId',
        element: <SpotDetailPage />
      },

    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

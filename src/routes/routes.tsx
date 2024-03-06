import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ROUTES } from './constants';

const Homepage = lazy(() => import('../pages/Homepage'));
const AppLayout = lazy(() => import('../pages/AppLayout'));
const SinglePokemonpage = lazy(() => import('../pages/SinglePokemonpage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ErrorFallback = lazy(() => import('../components/shared/ErrorFallback'));
const Loader = lazy(() => import('../components/shared/Loader'));

export const router = createBrowserRouter([
  {
    errorElement: (
      <ErrorFallback resetErrorBoundary={() => window.location.replace(ROUTES.home)} />
    ),
    element: <AppLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: ROUTES.home,
        element: <Homepage />,
      },
      {
        path:  ROUTES.pokemonDetails(":id"),
        element: (
          <Suspense fallback={<Loader />}>
            <SinglePokemonpage />
          </Suspense>
        ),
      },
    ],
  },
]);
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeProvider';

import Homepage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import Loader from './components/shared/Loader';
import ErrorFallback from './components/shared/ErrorFallback';
import NotFound from './pages/NotFound';

const SinglePokemonpage = lazy(() => import('./pages/SinglePokemonpage'));

const router = createBrowserRouter([
  {
    errorElement: (
      <ErrorFallback resetErrorBoundary={() => window.location.replace('/')} />
    ),
    element: <AppLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/pokemon/:id',
        element: (
          <Suspense fallback={<Loader />}>
            <SinglePokemonpage />
          </Suspense>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        {import.meta.env.MODE === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

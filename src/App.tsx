import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import ErrorFallback from './components/shared/ErrorFallback';
import NotFound from './pages/NotFound';

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
      // {
      //   path: '/pokemon:name',
      //   element: (
      //     <Suspense fallback={<Loader />}>
      //       <Clientspage />
      //     </Suspense>
      //   ),
      // },
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
    <QueryClientProvider client={queryClient}>
      {import.meta.env.MODE === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

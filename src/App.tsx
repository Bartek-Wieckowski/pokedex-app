import { RouterProvider } from 'react-router-dom';
import { AllTheProviders } from './AllTheProviders';
import { router } from './routes/routes';
import { Suspense } from 'react';
import Loader from './components/shared/Loader';

const App = () => {
  return (
    <Suspense fallback={<Loader fallbackLoader={true} />}>
      <AllTheProviders>
        <RouterProvider router={router} />
      </AllTheProviders>
    </Suspense>
  );
};

export default App;

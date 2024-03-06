import { RouterProvider } from 'react-router-dom';
import { AllTheProviders } from './AllTheProviders';
import { router } from './routes/routes';

const App = () => {
  return (
    <AllTheProviders>
      <RouterProvider router={router} />
    </AllTheProviders>
  );
};

export default App;

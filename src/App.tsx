import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
      <h1>test</h1>
    </QueryClientProvider>
  );
};

export default App;

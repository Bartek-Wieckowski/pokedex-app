import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from './contexts/ThemeProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // api dont have updates
      staleTime: Infinity,
      retry: 1,
    },
  },
});

export const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        {import.meta.env.MODE === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

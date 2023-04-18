import React, { useState } from 'react';

import AppRoutes from 'routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Modals from './components/Modals';

import './styles/global.css';

const App = () => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <Modals />
      <AppRoutes />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

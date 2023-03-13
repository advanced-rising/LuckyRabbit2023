import { store } from '@redux/store';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AppRoutes from 'routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Modals from '@components/Modals';

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
    <div>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Modals />
          <AppRoutes />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

export default App;

import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "react-query";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  let router = useRoutes(routes);
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        refetchOnWindowFocus: false,
        keepPreviousData: true
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <ScrollToTop />
      {router}
    </QueryClientProvider>
  );
}

import {
  QueryClientProvider as BaseQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Client } from "@/services/http-client";
import { joinPaths } from "@/utilities/common";

const client = new Client();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // This will use the query key as get request path
      queryFn: async function ({ queryKey }) {
        return await client.get(joinPaths(...(queryKey as string[])));
      },
    },
  },
});

export default function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </BaseQueryClientProvider>
  );
}

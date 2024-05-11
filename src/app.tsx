import { Toaster } from "react-hot-toast";

import "@/styles/globals.scss";

import QueryClientProvider from "@/providers/queryclient.provider";
import Router from "@/router";
import { ErrorBoundary } from "react-error-boundary";
import AppLayout from "./layout";
import ServerErrorPage from "./pages/500";

const App = () => {
  return (
    <AppLayout>
      <ErrorBoundary FallbackComponent={ServerErrorPage}>
        <QueryClientProvider>
          <Router />
          <Toaster />
        </QueryClientProvider>
      </ErrorBoundary>
    </AppLayout>
  );
};

export default App;

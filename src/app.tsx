import { Toaster } from "react-hot-toast";

import "@/styles/globals.scss";

import AppLayout from "@/layouts/applayout";
import QueryClientProvider from "@/providers/queryclient.provider";
import Router from "@/router";

const App = () => {
  return (
    <AppLayout>
      <QueryClientProvider>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </AppLayout>
  );
};

export default App;

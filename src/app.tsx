import { Toaster } from "react-hot-toast";

import "@/styles/globals.scss";

import QueryClientProvider from "@/providers/queryclient.provider";
import Router from "@/router";
import AppLayout from "./layout";

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

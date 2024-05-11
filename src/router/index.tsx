import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "@/pages/404";
import AuthLayout from "@/pages/auth/layout";
import BaseLayout from "@/pages/layout";

import { authRoutes } from "@/router/auth.route";
import { layoutRoutes } from "@/router/layout.route";

const routes = [
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <BaseLayout />, children: layoutRoutes },
  { path: "/", element: <AuthLayout />, children: authRoutes },
];

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

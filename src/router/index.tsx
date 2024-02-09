import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "@/layouts/authlayout";
import BaseLayout from "@/layouts/baselayout";
import ErrorPage from "@/pages/404";

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

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages";
import ErrorPage from "@/pages/404";
import AuthLayout from "@/pages/auth/layout";
import LoginPage from "@/pages/auth/login";
import BaseLayout from "@/pages/layout";

const layoutRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <p className="text-primary">users page</p> },
];
const authRoutes = [{ path: "/login", element: <LoginPage /> }];

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

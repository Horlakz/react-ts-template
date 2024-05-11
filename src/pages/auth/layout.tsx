import classNames from "classnames";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";

import logo from "@/assets/react.svg";

import Button from "@/components/ui/button";
import { useRouter } from "@/router/router.hook";
import { useAuth } from "./auth.hook";

const AuthLayout = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const pathname = router.pathname;

  const buttonClass = (path: string) =>
    classNames(
      "px-12 mx-2 py-2 bg-secondary default-transition rounded-lg",
      pathname === path
        ? "bg-opacity-20 text-white"
        : "text-gray-100 bg-opacity-5 hover:text-white hover:bg-opacity-10"
    );

  useEffect(() => {
    if (isAuthenticated) {
      toast.error("You are already logged in");
      router.goTo("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex center w-full h-screen auth-background">
      <Button
        className="absolute top-3 left-3 p-2"
        onClick={() => router.goTo("/")}
      >
        Home
      </Button>

      <section className="flex-col-center bg-transparent gap-4 py-auto px-6 sm:px-40 rounded-lg">
        <img src={logo} alt="logo" />

        <div className="flex-center">
          <button
            type="button"
            className={buttonClass("/login")}
            onClick={() => router.goTo("/login")}
          >
            Login
          </button>

          <button
            type="button"
            className={buttonClass("/register")}
            onClick={() => router.goTo("/register")}
          >
            Register
          </button>
        </div>

        <Outlet />

        <p className="text-gray-200">
          Or {pathname === "/register" ? "sign up" : "sign in"} with
        </p>
      </section>
    </div>
  );
};

export default AuthLayout;

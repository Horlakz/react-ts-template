import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/auth";
import { useRouter } from "@/router/router.hook";
import { Storage } from "@/utilities/storage";
import { LoginRequestPayload } from "./auth.interface";
import { AuthService } from "./auth.service";

export function useAuth() {
  const storage = new Storage();
  const router = useRouter();

  const isAuthenticated = storage.checkItem(ACCESS_TOKEN_KEY);

  function logout() {
    storage.deleteItem(ACCESS_TOKEN_KEY);
    router.goTo("/login");
  }

  return { isAuthenticated, logout };
}

export function useLogin(data: LoginRequestPayload) {
  const storage = new Storage();
  const auth = new AuthService();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async () => await auth.login(data),
    onSuccess: (data) => {
      storage.setItem(ACCESS_TOKEN_KEY, data.data.accessToken);
      storage.setItem(REFRESH_TOKEN_KEY, data.data.refreshToken);
      toast.success("login successful");
      router.goTo("/dashboard");
    },
    onError: (err: AxiosError<Error>) => {
      toast.error(err?.response?.data.message || err?.message);
    },
  });

  return {
    mutate: loginMutation.mutate,
    isLoading: loginMutation.isPending,
  };
}

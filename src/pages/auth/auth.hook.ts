import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/constants/auth";
import { useRouter } from "@/hooks/common/router";
import { AuthService } from "@/services/auth";
import { LoginRequestPayload } from "@/services/auth/auth.interface";
import { Storage } from "@/utilities/storage";

const storage = new Storage();
const auth = new AuthService();
const router = useRouter();

export function useLogin(data: LoginRequestPayload) {
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

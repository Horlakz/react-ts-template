import { useNavigate } from "react-router-dom";

import { ACCESS_TOKEN_KEY } from "@/constants/auth";
import { Storage } from "@/utilities/storage";

export function useAuth() {
  const navigate = useNavigate();
  const storage = new Storage();

  const isAuthenticated = storage.checkItem(ACCESS_TOKEN_KEY);

  function logout() {
    storage.deleteItem(ACCESS_TOKEN_KEY);
    navigate("/login");
  }

  return { isAuthenticated, logout };
}

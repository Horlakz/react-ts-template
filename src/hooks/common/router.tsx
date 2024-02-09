import {
  useLocation,
  useNavigate,
  useParams as useReactRouterDomParams,
} from "react-router-dom";

export function useRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  function goTo(path: string) {
    navigate(path);
  }

  function goBack() {
    navigate(-1);
  }

  return {
    pathname,
    goTo,
    goBack,
  };
}

export function useParams() {
  const params = useReactRouterDomParams();

  return { params };
}

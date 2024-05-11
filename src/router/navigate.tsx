import { useEffect } from "react";
import { useRouter } from "./router.hook";
import { NavigateProps } from "./router.interface";

/**
 * Navigates to the specified route.
 *
 * @param {NavigateProps} to - The props containing the route to navigate to.
 * @returns {null} - Returns null.
 */
function Navigate(props: NavigateProps) {
  const router = useRouter();

  useEffect(() => {
    router.goTo(props.to);
  }, [props.to]);

  return null;
}

export default Navigate;

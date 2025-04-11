import { Link as BaseLink } from "react-router";

import { LinkProps } from "./router.interface";

function Link(props: LinkProps) {
  return (
    <BaseLink to={props.href} {...props}>
      {props.children}
    </BaseLink>
  );
}

export default Link;

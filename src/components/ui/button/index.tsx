import { twMerge } from "tailwind-merge";

import Spinner from "@/components/icons/spinner";
import { baseClassName, sizeClasses } from "./button.constant";
import { ButtonProps } from "./button.interface";
import { getVariantClasses } from "./button.utilities";

function Button<T extends React.ElementType = "button">(props: ButtonProps<T>) {
  const isIcon = props.isLoading ? <Spinner /> : props.icon;
  const disabled = props.isLoading || props.disabled;

  const { variant = "solid", colorScheme = "primary", size = "md" } = props;

  const className = twMerge(
    baseClassName,
    (props.href || props.to) && "w-fit",
    disabled == false && "active:scale-90",
    sizeClasses[size],
    getVariantClasses(variant, colorScheme),
    props.className
  );

  if (props.as) {
    const Element = props.as as React.ElementType;
    return (
      <Element {...props} className={className}>
        {props.children}
      </Element>
    );
  }

  return (
    <button {...props} disabled={disabled} className={className}>
      {isIcon && props.iconPos === "left" && (
        <span className="mr-2">{isIcon}</span>
      )}
      {props.children}
      {isIcon && props.iconPos === "right" && (
        <span className="ml-2">{isIcon}</span>
      )}
    </button>
  );
}

Button.defaultProps = {
  iconPos: "left",
  disabled: false,
  colorScheme: "primary",
};

export default Button;

import classNames from "classnames";

import {
  colorSchemeOutlineClasses,
  colorSchemeSolidClasses,
} from "./button.constant";
import { ColorScheme, Variant } from "./button.interface";

export function getVariantClasses(variant: Variant, colorScheme: ColorScheme) {
  switch (variant) {
    case "outline":
      return classNames(
        colorSchemeOutlineClasses[colorScheme],
        "border-2 bg-transparent"
      );
    case "ghost":
      return classNames(
        colorSchemeOutlineClasses[colorScheme],
        "bg-transparent p-0"
      );
    case "link":
      return classNames(
        colorSchemeOutlineClasses[colorScheme],
        "border-b-2 p-0 rounded-none"
      );
    default:
      return classNames(
        colorSchemeSolidClasses[colorScheme],
        "text-black hover:bg-opacity-80"
      );
  }
}

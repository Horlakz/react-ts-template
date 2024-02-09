import { ColorScheme } from "./button.interface";

export const colorSchemeSolidClasses: Record<ColorScheme, string> = {
  primary: "bg-secondary",
  success: "bg-success",
  danger: "bg-danger",
  warning: "bg-warning",
  info: "bg-info",
};

export const colorSchemeOutlineClasses: Record<ColorScheme, string> = {
  primary: "text-secondary border-secondary",
  success: "text-success border-success",
  danger: "text-danger border-danger",
  warning: "text-warning border-warning",
  info: "text-info border-info",
};

export const sizeClasses: Record<string, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-1.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export const baseClassName =
  "flex items-center rounded-lg default-transition cursor-pointer disabled:cursor-not-allowed";

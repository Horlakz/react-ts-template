export type Variant = "ghost" | "outline" | "solid" | "link";
export type ColorScheme = "primary" | "success" | "danger" | "warning" | "info";
export type Size = "sm" | "md" | "lg";

export type BaseButtonProps = {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPos?: "left" | "right";
  isLoading?: boolean;
  variant?: Variant;
  colorScheme?: ColorScheme;
  size?: Size;
};

export type ButtonProps<T extends React.ElementType> = BaseButtonProps &
  Omit<React.ComponentProps<T>, keyof BaseButtonProps> & {
    as?: T;
  };

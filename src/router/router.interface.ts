import { ComponentProps, ReactNode } from "react";
import { Link } from "react-router";

export interface NavigateProps {
  to: string;
}

export type LinkProps = { href: string; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "to"
>;

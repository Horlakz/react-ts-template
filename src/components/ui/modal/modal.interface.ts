import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  visibility?: boolean;
  setVisibility?: () => void;
  showCloseButton?: boolean;
}

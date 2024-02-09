import { HTMLFormElements } from "@/hooks/form/form.interface";

export interface SelectOptionProps {
  label: string;
  value: string;
}

export interface InputProps {
  label: string;
  type?: "text" | "email" | "password" | "number";
  className?: string;
  container?: string;
  value?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLFormElements>) => void;
  validationError?: string;
}

export interface TextAreaProps extends Omit<InputProps, "type"> {
  rows?: number;
}

export interface SelectProps extends Omit<InputProps, "type" | "onChange"> {
  onChange: (value: string) => void;
  defaultValue?: string;
  options: SelectOptionProps[];
}

export interface RadioProps extends Omit<InputProps, "type"> {
  checked?: boolean;
}

import { AnyObject, Maybe, ObjectSchema } from "yup";

export type HTMLFormElements =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | HTMLButtonElement;
export type HTMLFormChangeEvent = React.ChangeEvent<HTMLFormElements>;
export type ReactButtonEvent = React.MouseEvent<HTMLFormElements>;
export type Key<T> = keyof T;
export type TRecord<T> = Record<Key<T>, string>;
export type ValidationFunction<T> = (values: T) => Promise<TRecord<T>>;
export type SubmitFunction<T> = (values: T) => void;
export type FormOptions<T extends Maybe<AnyObject>> = {
  initialState?: T;
  schema: ObjectSchema<T>;
  onSubmit: SubmitFunction<T>;
};
export type FormReturnT<T extends Maybe<AnyObject>> = {
  formData: T;
  handleChange: (e: HTMLFormChangeEvent) => void;
  handleSubmit: (e?: ReactButtonEvent) => void;
  setFormField: (key: Key<T>, value: T[Key<T>]) => void;
  clearForm: () => void;
  errors: TRecord<T>;
};

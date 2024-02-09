import { useState } from "react";
import { AnyObject, Maybe } from "yup";

import {
  FormOptions,
  FormReturnT,
  HTMLFormChangeEvent,
  Key,
  ReactButtonEvent,
  TRecord,
  ValidationFunction,
} from "./form.interface";

export function useForm<T extends Maybe<AnyObject>>(
  options: FormOptions<T>
): FormReturnT<T> {
  const INITIAL_STATE: T = options.initialState
    ? options.initialState
    : options.schema.getDefault();

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState<TRecord<T>>({} as TRecord<T>);

  const validate: ValidationFunction<T> = async (values) => {
    try {
      await options.schema.validate(values, { abortEarly: false });
      return {} as TRecord<T>;
    } catch (err: any) {
      const errors: TRecord<T> = {} as TRecord<T>;
      err.inner.forEach((error: any) => {
        errors[error.path as keyof T] = error.message;
      });
      return errors;
    }
  };

  function setFormField<K extends keyof T>(field: K, value: T[K]) {
    setFormData((prevState: any) => {
      const state = { ...prevState };
      state[field] = value;
      return state;
    });
  }

  function clearForm() {
    setFormData(INITIAL_STATE);
  }

  function handleChange(e: HTMLFormChangeEvent) {
    const target = e.target;
    setFormField(target.name as Key<T>, target.value as T[Key<T>]);
  }

  async function handleSubmit(e?: ReactButtonEvent) {
    e!.preventDefault();

    const validationErrors = await validate(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      options.onSubmit(formData);
    }
  }

  return {
    formData,
    errors,
    handleChange,
    setFormField,
    clearForm,
    handleSubmit,
  };
}

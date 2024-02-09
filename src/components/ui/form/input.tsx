import { twMerge } from "tailwind-merge";

import { replaceWith } from "@/utilities/common";
import { InputProps } from "./form.interface";

function Input(props: InputProps) {
  return (
    <div className={twMerge("relative z-0", props.container)}>
      <input
        type={props.type}
        name={props.name ? props.name : replaceWith(props.label)}
        id={replaceWith(props.label)}
        className={twMerge(
          "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 default-transition peer",
          props.className,
          props.validationError && "border-red-500"
        )}
        placeholder=" "
        value={props.value}
        onChange={props.onChange}
      />
      <label
        className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        htmlFor={replaceWith(props.label)}
      >
        {props.label}
      </label>
      {props.validationError && (
        <p className="text-red-500 text-sm">{props.validationError}</p>
      )}
    </div>
  );
}

export default Input;

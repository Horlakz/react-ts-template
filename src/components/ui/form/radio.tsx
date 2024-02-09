import { twMerge } from "tailwind-merge";

import { replaceWith } from "@/utilities/common";
import { RadioProps } from "./form.interface";

function RadioSelect(props: RadioProps) {
  return (
    <div>
      <label
        htmlFor={replaceWith(props.label)}
        className={twMerge("flex items-center cursor-pointer", props.className)}
      >
        <input
          type="radio"
          id={replaceWith(props.label)}
          name={props.name ?? replaceWith(props.label)}
          className="hidden peer"
          onChange={props.onChange}
          checked={props.checked}
          value={props.value}
        />
        <span className="w-4 h-4 rounded-full border-2 border-gray-400 mr-2 peer-checked:bg-[#777]"></span>
        <span className="sr-only">{props.label}</span>
      </label>
    </div>
  );
}

export default RadioSelect;

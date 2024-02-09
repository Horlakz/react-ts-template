import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import ChevronDownIcon from "@/components/icons/chevron-down";
import { replaceWith } from "@/utilities/common";
import { SelectProps } from "./form.interface";

function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);

  const handleOptionClick = (optionLabel: string, optionValue: string) => {
    setSelectedOption(optionLabel);
    setIsOpen(false);
    if (props.onChange) {
      props.onChange(optionValue);
    }
  };

  return (
    <div className={twMerge("relative", props.className)}>
      <label htmlFor={replaceWith(props.label)} className="sr-only">
        {props.label}
      </label>
      <div
        id={replaceWith(props.label)}
        className="block py-2.5 px-0 w-full text-sm text-gray-400 focus:text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 default-transition peer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <ChevronDownIcon />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-10 w-full mt-1 bg-[#222] rounded-md shadow-lg"
            // FIXME: fix the animation
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {props.options.map((option, i) => (
              <div
                key={i}
                className="py-2 px-4 hover:bg-[#333] cursor-pointer"
                onClick={() => handleOptionClick(option.label, option.value)}
              >
                {option.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {props.validationError && (
        <p className="text-red-500 text-sm">{props.validationError}</p>
      )}
    </div>
  );
}

export default Select;

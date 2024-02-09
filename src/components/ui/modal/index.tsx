import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import toast from "react-hot-toast";

import { LiaTimesSolid as CloseIcon } from "react-icons/lia";

import { modalVariants } from "./modal";
import { ModalProps } from "./modal.interface";

export function Modal(props: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (props.setVisibility) {
      props.setVisibility();
    } else {
      toast.error("Function not implemented");
    }
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {props.visibility && (
        <motion.div
          className="fixed z-20 w-full h-full left-0 top-0 py-4 px-3 md:px-6 bg-[rgba(0,0,0,0.3)] grid place-content-center"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleOutsideClick}
          ref={modalRef}
        >
          <motion.div
            className="shadow-lg w-fit mx-auto relative bg-primary rounded-3xl"
            variants={modalVariants}
          >
            {props.children}

            {props.showCloseButton && (
              <button
                className="absolute top-2 right-2 p-2 border-none rounded-full"
                onClick={handleClose}
              >
                <CloseIcon size={32} />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

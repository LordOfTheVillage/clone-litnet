import { ReactNode } from "react";
import { CloseButton } from "../close-button";

interface ModalProps {
  children: ReactNode;
  displayModal: (param: boolean) => void;
}

export const Modal = ({ children, displayModal }: ModalProps) => {
  return (
    <div
      className="absolute top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
      onClick={() => displayModal(false)}
    >
      <div
        className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center bg-white py-10 px-8 dark:bg-zinc-800 sm:relative sm:h-auto sm:w-auto sm:min-w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={() => displayModal(false)} />
        {children}
      </div>
    </div>
  );
};

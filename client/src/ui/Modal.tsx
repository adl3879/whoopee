import * as React from "react";
import { CancelIcon } from "../icons";

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  // close modal on escape key
  const closeOnEscapeKey = (e: KeyboardEvent) => {
    if (e.code == "27" && onClose()) return;
  };

  React.useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, []);

  return (
    <div
      className={`modal fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-grey-overlay p-4 
      pointer-events-none opacity-0 ease-in ${
        isOpen && "opacity-25 pointer-events-auto"
      }`}
      onClick={onClose}
    >
      <div
        className="modal_content w-2/4 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h2 className="">{title}</h2>
          <button className="outline-none" onClick={onClose}>
            {CancelIcon}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

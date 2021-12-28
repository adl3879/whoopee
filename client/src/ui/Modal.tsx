import * as React from "react";
import { CancelIcon } from "../icons";
import { CSSTransition } from "react-transition-group";

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  // close modal on escape key
  const closeOnEscapeKey = (e: KeyboardEvent) => {
    if (e.code == "Escape") onClose();
  };

  React.useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, []);

  return (
    <CSSTransition
      in={isOpen}
      timeout={{ enter: 0, exit: 300 }}
      classNames="modal"
      unmountOnExit
    >
      <div
        className="modal fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center bg-grey-overlay"
        onClick={onClose}
      >
        <div
          className="modal-content w-10/12 md:w-1/2 lg:w-1/3 bg-white p-4 rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-primary text-grey-primary text-xl font-medium">
              {title}
            </h2>
            <button className="outline-none" onClick={onClose}>
              <CancelIcon width={20} height={20} />
            </button>
          </div>
          <div className="font-primary">{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;

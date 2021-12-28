import * as React from "react";

export interface PopupProps {
  position: { x: number; y: number };
}

const Popup: React.FC<PopupProps> = ({ position, children }) => {
  return (
    <div className="pop-background fixed left-0 right-0 top-0 bottom-0">
      <div className="pop-content p-2 shadow-sm">{children}</div>
    </div>
  );
};

export default Popup;

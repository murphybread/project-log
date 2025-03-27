// Modal.jsx
import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-xl z-10 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal header */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h5 className="text-lg font-medium">{title}</h5>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-xl font-bold">×</span>
          </button>
        </div>

        {/* Modal body */}
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

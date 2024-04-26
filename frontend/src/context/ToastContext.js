import React from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const showToast = (message, isSuccess) => {
    if (isSuccess) {
      toast.success(message, {
        position: toast.TOP_CENTRE,
      });
    } else {
        toast.error(message, {
          position: toast.TOP_CENTRE,
        });
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
    </ToastContext.Provider>
  );
};


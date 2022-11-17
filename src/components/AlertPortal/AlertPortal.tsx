import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import useAlert from "./useAlert";

export const AlertContext = createContext({} as any);

export const AlertProvider = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [alertText, setAlertText] = useState("");
  return (
    <AlertContext.Provider
      value={{
        isVisible,
        setIsVisible,
        isRendered,
        setIsRendered,
        alertText,
        setAlertText,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

const AlertPortal = () => {
  const { isVisible, isRendered, alertText } = useAlert();
  const portalElement = document.getElementById("portal");

  const ele = (
    <div className="alert-container" style={{ position: "absolute" }}>
      {isRendered && alertText && (
        <div className={`alert ${isVisible ? "open" : ""}`}>{alertText}</div>
      )}
    </div>
  );

  return portalElement ? ReactDOM.createPortal(ele, portalElement) : null;
};

export default AlertPortal;

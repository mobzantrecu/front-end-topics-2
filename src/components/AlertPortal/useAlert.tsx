import { useContext } from "react";
import { AlertContext } from "./AlertPortal";

const useAlert = () => {
  const context = useContext(AlertContext);

  if (context === undefined) {
    throw new Error("useAlert must be called within an  AlertProvider");
  }

  const {
    isVisible,
    setIsVisible,
    isRendered,
    setIsRendered,
    alertText,
    setAlertText,
  } = context;

  const renderAlert = (text) => {
    setAlertText(text);
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
    setIsRendered(true);
    setTimeout(() => {
      setTimeout(() => {
        setIsRendered(false);
      }, 250);
      setIsVisible(false);
    }, 3000);
  };
  return {
    renderAlert,
    isVisible,
    isRendered,
    alertText,
  };
};
export default useAlert;

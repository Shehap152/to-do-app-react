import { useState, createContext } from "react";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  // sync tasks & alignment with reducer
  const [alignment, setAlignment] = useState("الكل");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <SnackbarContext.Provider
      value={{
        alignment: alignment,
        handleChange: handleChange,
        handleClose: handleClose,
        handleClick : handleClick,
        open: open,
        setOpen: setOpen,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

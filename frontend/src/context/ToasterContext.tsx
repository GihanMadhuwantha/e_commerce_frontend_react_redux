import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert, AlertColor, useTheme } from "@mui/material";

interface ToasterContextProps {
  showToaster: (message: string, severity: AlertColor) => void;
}

const ToasterContext = createContext<ToasterContextProps | undefined>(
  undefined
);

export const ToasterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();

  const [toaster, setToaster] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const showToaster = (message: string, severity: AlertColor) => {
    setToaster({ open: true, message, severity });
  };

  const handleClose = () => {
    setToaster({ ...toaster, open: false });
  };

  return (
    <ToasterContext.Provider value={{ showToaster }}>
      {children}
      <Snackbar
        open={toaster.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.text.secondary}`,
            borderRadius: "16px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <Alert
          onClose={handleClose}
          severity={toaster.severity}
          sx={{
            width: "100%",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            fontSize: "0.875rem",
            fontWeight: 500,
            borderRadius: "16px",
            border: `1px solid ${theme.palette.text.secondary}`,
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          {toaster.message}
        </Alert>
      </Snackbar>
    </ToasterContext.Provider>
  );
};

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error("useToaster must be used within a ToasterProvider");
  }
  return context;
};

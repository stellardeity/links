import { useCallback } from "react";
import { Alert } from "@material-ui/lab";

export const useMessage = () => {
  return useCallback((text) => {
    if (text) {
      return <Alert severity="error">{text}</Alert>;
    }
  }, []);
};

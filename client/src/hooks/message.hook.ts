import { useCallback } from "react";

export const useMessage = () => {
  return useCallback((text) => {
    if (text) {
      window.alert(text);
    }
  }, []);
};

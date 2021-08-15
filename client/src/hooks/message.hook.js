import { useCallback } from "react";

export const useMessage = () => {
  return useCallback((text) => {
    // console.log(text);
    if (text) {
      window.alert(text);
    }
  }, []);
};

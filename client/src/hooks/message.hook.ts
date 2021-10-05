import { useCallback } from "react";
import { message } from "antd";

export const useMessage = () => {
  return useCallback((text) => {
    text && message.error(text);
  }, []);
};

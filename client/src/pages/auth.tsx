import React, { useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/auth.context";
import { ToServerLoginData } from "../interfaces";
import { Login } from "../components/Login";
import { Tabs } from "antd";
import { Register } from "../components/Register";

export const Auth = () => {
  const auth = useContext(AuthContext);
  const { request, error, clearError } = useHttp();
  const message = useMessage();

  const { TabPane } = Tabs;

  useEffect(() => {
    message(error);
    clearError();
  }, [clearError, error, message]);

  const onFinish = async (values: ToServerLoginData) => {
    try {
      const data = await request("api/auth/login", "POST", { ...values });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        <Login onFinish={onFinish} />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <Register />
      </TabPane>
    </Tabs>
  );
};

import React, { useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/auth.context";
import { ToServerLoginData, ToServerRegisterData } from "../interfaces";
import { Login } from "../components/Login";
import { Tabs } from "antd";
import { Register } from "../components/Register";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import { CheckCircleOutlined, LoginOutlined } from "@ant-design/icons";

export const Auth = () => {
  let location = useLocation();
  const message = useMessage();
  let history = useHistory();
  const auth = useContext(AuthContext);
  const { request, error, clearError } = useHttp();
  const { TabPane } = Tabs;

  useEffect(() => {
    message(error);
    clearError();
  }, [clearError, error, message]);

  const loginHandler = async (values: ToServerLoginData) => {
    try {
      const data = await request("api/auth/login", "POST", { ...values });
      auth.login(data.token, data.userId, values.remember);
    } catch (e) {}
  };

  const registerHandler = async (values: ToServerRegisterData) => {
    try {
      await request("api/auth/register", "POST", { ...values });
      history.push(`/login`);
    } catch (e) {}
  };

  return (
    <Wrapper
      activeKey={location.pathname}
      onChange={(key) => {
        history.push(`${key}`);
      }}
    >
      <TabPane
        tab={
          <span>
            <LoginOutlined />
            Login
          </span>
        }
        key="/login"
      >
        <Login onFinish={loginHandler} />
      </TabPane>
      <TabPane
        tab={
          <span>
            <CheckCircleOutlined />
            Register
          </span>
        }
        key="/register"
      >
        <Register onFinish={registerHandler} />
      </TabPane>
    </Wrapper>
  );
};

const Wrapper = styled(Tabs)`
  max-height: 100vh;
`;

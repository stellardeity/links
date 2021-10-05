import React, { useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/auth.context";
import { ToServerLoginData } from "../interfaces";
import { Login } from "../components/Login";
import { Tabs } from "antd";
import { Register } from "../components/Register";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Auth = () => {
  const auth = useContext(AuthContext);
  const { request, error, clearError } = useHttp();
  const message = useMessage();
  let history = useHistory();

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
    <Wrapper
      onChange={(key) => {
        history.push(`/${key}`);
      }}
    >
      <TabPane tab="Login" key="login">
        <Login onFinish={onFinish} />
      </TabPane>
      <TabPane tab="Register" key="register">
        <Register />
      </TabPane>
    </Wrapper>
  );
};

// defaultActiveKey={match.params.tab}
//                       onChange={key => {
//                         console.log(match);
//                         history.push(`/tabs/${key}`);
//                       }}

const Wrapper = styled(Tabs)`
  max-height: 100vh;
`;

import React from "react";
import { Button, Checkbox, Form, Input, Row } from "antd";
import { ToServerLoginData } from "../interfaces";
import { CompassTwoTone } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

type Props = {
  onFinish: (values: ToServerLoginData) => void;
};

export const Login: React.FC<Props> = ({ onFinish }) => (
  <CustomRow justify="center" align="middle">
    <Form
      labelCol={{ span: 8 }}
      onFinish={onFinish}
    >
      <TitleForm>
        <CompassTwoTone style={{ fontSize: 40, marginRight: "10px" }} />
        <Title level={2}>Link shortening</Title>
      </TitleForm>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" type="email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Checkbox>Remember me</Checkbox>
        <ForgotPassword to="/register">Forgot password</ForgotPassword>
        <LoginButton type="primary" htmlType="submit">
          Log in
        </LoginButton>
        Or <NavLink to="/register">register now!</NavLink>
      </Form.Item>
    </Form>
  </CustomRow>
);

const TitleForm = styled.div`
  display: flex;
  margin: 20px 0;
`;

const CustomRow = styled(Row)`
  min-height: 100vh;
`;

const ForgotPassword = styled(NavLink)`
  float: right;
`;

const LoginButton = styled(Button)`
  width: 100%;
  margin: 10px 0;
`;

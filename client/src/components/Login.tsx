import React from "react";
import { Button, Form, Input } from "antd";
import { ToServerLoginData } from "../interfaces";
import Icon from "@ant-design/icons/lib/components/Icon";

type Props = {
  onFinish: (values: ToServerLoginData) => void;
};

export const Login: React.FC<Props> = ({ onFinish }) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
    className="login-form"
  >
    <Form.Item
      name="email"
      rules={[{ required: true, message: "Please input your email!" }]}
    >
      <Input
        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Username"
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>
    <Button type="primary" htmlType="submit" className="login-form-button">
      Log in
    </Button>
    Or <a href="">register now!</a>
  </Form>
);

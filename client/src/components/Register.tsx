import React from "react";
import { Button, Form, Input, Radio, Row, Switch } from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CompassTwoTone } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { ToServerRegisterData } from "../interfaces";

type Props = {
  onFinish: (values: ToServerRegisterData) => void;
};

export const Register: React.FC<Props> = ({ onFinish }) => (
  <CustomRow justify="center" align="middle">
    <Form autoComplete="off" onFinish={onFinish}>
      <TitleForm>
        <CompassTwoTone style={{ fontSize: 40, marginRight: "10px" }} />
        <div>
          <Title level={2} style={{ margin: 0 }}>
            Link shortening
          </Title>
          <Title level={5} style={{ margin: 0 }}>
            Registration
          </Title>
        </div>
      </TitleForm>
      <Form.Item
        name="gender"
        label="Who are you?"
        tooltip="This is a required field"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="male">Male</Radio.Button>
          <Radio.Button value="female">Female</Radio.Button>
          <Radio.Button value="programmer">Programmer</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
        name="email"
      >
        <Input placeholder="Email" type="email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm password" />
      </Form.Item>

      <Form.Item
        valuePropName="checked"
        name="follow"
        label="I want to receive the newsletter by mail"
      >
        <Switch />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
        <ForgotPassword to="/login">I already have an account</ForgotPassword>
      </Form.Item>
    </Form>
  </CustomRow>
);

const CustomRow = styled(Row)`
  min-height: 100vh;
`;

const ForgotPassword = styled(NavLink)`
  float: right;
`;

const TitleForm = styled.div`
  display: flex;
  margin: 20px 0;
`;

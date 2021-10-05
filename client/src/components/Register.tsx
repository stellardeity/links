import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Switch,
} from "antd";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CompassTwoTone } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

export const Register: React.FC = () => (
  <CustomRow justify="center" align="middle">
    <Form autoComplete="off">
      <TitleForm>
        <CompassTwoTone style={{ fontSize: 40, marginRight: "10px" }} />
        <div>
          <Title level={2} style={{ margin: 0 }}>Link shortening</Title>
          <Title level={5} style={{ margin: 0 }}>Registration</Title>
        </div>
      </TitleForm>
      <Form.Item
        name="gender"
        label="Who are you?"
        tooltip="This is a required field"
      >
        <Radio.Group>
          <Radio.Button value="male">Male</Radio.Button>
          <Radio.Button value="female">Female</Radio.Button>
          <Radio.Button value="programmer">Programmer</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Input placeholder="Email" type="email" />
      </Form.Item>

      <Form.Item style={{ marginBottom: "2px" }}>
        <label>Your password: </label>
        <Input placeholder="Password" style={{ margin: "5px 0" }} />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Confirm password" />
      </Form.Item>
      <Form.Item label="Date of Birth">
        <DatePicker />
      </Form.Item>

      <Form.Item
        valuePropName="checked"
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

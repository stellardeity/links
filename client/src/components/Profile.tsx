import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import styled from "styled-components";

export const Profile = () => {
  return (
    <ProfileInfo>
      <Avatar
        style={{ marginRight: 10 }}
        size="large"
        icon={<AntDesignOutlined />}
      />
      <Info>
        <Typography.Text>Maria Berestovaya</Typography.Text>
        <Typography.Text strong>Programmer</Typography.Text>
      </Info>
    </ProfileInfo>
  );
};

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;

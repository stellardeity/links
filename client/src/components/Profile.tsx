import { Avatar, Button, Input, Typography, Image } from "antd";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/auth.context";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "./Loader";

export const Profile = () => {
  const { request } = useHttp();
  const { userId, token } = useContext(AuthContext);
  const [user, setUser] = useState<any>(null);
  const [avatar, setAvatar] = useState("");

  const fetchUser = useCallback(async () => {
    try {
      const data = await request(`api/user/${userId}`, "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setUser(data);
    } catch (e) {}
  }, [request, userId, token]);

  const editAvatar = useCallback(async () => {
    try {
      const data = await request(
        `api/user/${userId}/edit`,
        "PATCH",
        { avatar },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      setAvatar(data);
    } catch (e) {}
  }, [request, userId, avatar, token]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (!user) {
    return <Loader />;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <ProfileInfo>
        <Avatar style={{ marginRight: 10 }} size="large" src={user.avatar} />
        <Info>
          <Typography.Text>{user.email}</Typography.Text>
          <Typography.Text strong>{user.gender}</Typography.Text>
        </Info>
      </ProfileInfo>
      <Input
        style={{ margin: "20px 0" }}
        placeholder="Avatar"
        onChange={(e) => setAvatar(e.target.value)}
      />
      {avatar && <Image style={{ marginBottom: 20 }} width={200}
      height={200} src={avatar} />}
      <Button style={{ width: 200 }} onClick={editAvatar}>Edit</Button>

    </div>
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

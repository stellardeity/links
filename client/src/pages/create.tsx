import React, { useContext, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/auth.context";
import { useHistory } from "react-router-dom";
import { CreateLink } from "../components/CreateLink";
import { Button, Drawer } from "antd";
import { Profile } from "../components/Profile";
import { UserOutlined } from "@ant-design/icons";

export const Create = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { loading } = useHttp();
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    auth.logout();
    history.push("/");
  };

  const handleDrawer = () => setVisible(!visible);
  if (loading) return <Loader />;

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<UserOutlined style={{ fontSize: 20 }} />}
        onClick={handleDrawer}
        style={{
          position: "fixed",
          zIndex: 2,
          bottom: 20,
          right: 50,
          width: 60,
          height: 60,
        }}
      />
      <CreateLink />
      <Drawer
        width={300}
        title="Your Profile"
        placement="right"
        onClose={handleDrawer}
        visible={visible}
      >
        <Profile />
        <Button
          style={{ width: 250, position: "absolute", bottom: 10 }}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Drawer>
    </>
  );
};

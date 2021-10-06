import React, { useContext } from "react";
import { ILink } from "../interfaces";
import { Button, List, Skeleton } from "antd";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/auth.context";

const LinksList = ({ links }: { links: Array<ILink> }) => {
  const { request } = useHttp();
  const auth = useContext(AuthContext);

  if (!links.length) {
    return <p>Links list is empty</p>;
  }

  const handleDelete = async (id: string) => {
    try {
      await request(`api/link/${id}`, "DELETE", null, {
        Authorization: `Bearer ${auth.token}`,
      });
    } catch (e) {}
  };

  return (
    <List
      dataSource={links}
      renderItem={(link) => (
        <List.Item
          actions={[
            <Button onClick={handleDelete.bind(null, link._id)} danger>
              Delete
            </Button>,
          ]}
        >
          <Skeleton avatar title={false} loading={!links.length} active>
            <List.Item.Meta
              title={<a href={link.to}>{link.to}</a>}
              description={link.from}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default LinksList;

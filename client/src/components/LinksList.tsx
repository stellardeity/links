import React, { useContext } from "react";
import { Button, List, Skeleton } from "antd";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/auth.context";
import { ILink } from "../interfaces";

type Props = {
  links: Array<ILink>;
  setLinks: (e: any) => void;
};

const LinksList: React.FC<Props> = ({ links, setLinks }) => {
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
      setLinks((prevState: Array<ILink>) =>
        prevState.filter((l) => l._id !== id)
      );
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
              title={
                <a href={link.to} target="_blank" rel="noreferrer">
                  {link.to}
                </a>
              }
              description={
                <p style={{ wordWrap: "break-word" }}>
                  {link.from.length > 1000 ? "Your link is too big" : link.from}
                </p>
              }
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default LinksList;

import { Input } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useHttp } from "../hooks/http.hook";
import LinksList from "./LinksList";

export const CreateLink: React.FC = () => {
  const { request, loading } = useHttp();
  const [link, setLink] = useState("");
  const auth = useContext(AuthContext);

  const [links, setLinks] = useState([]);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("api/link", "GET", null, {
        Authorization: `Bearer ${auth.token}`,
      });
      setLinks(fetched);
    } catch (e) {}
  }, [auth.token, request]);

  const pressHandler = async (ev: React.KeyboardEvent) => {
    if (ev.key === "Enter") {
      try {
        await request(
          "api/link/generate",
          "POST",
          {
            from: link,
          },
          { Authorization: `Bearer ${auth.token}` }
        );
        fetchLinks();
      } catch (e) {}
    }
  };

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  return (
    <>
      <Input.Search
        style={{ margin: "20px 0" }}
        autoFocus
        placeholder="Add new link"
        allowClear
        required
        enterButton="GENERATE"
        size="large"
        onKeyPress={pressHandler}
        onChange={(e) => setLink(e.target.value)}
        value={link}
      />
      {!loading && <LinksList links={links} />}
    </>
  );
};

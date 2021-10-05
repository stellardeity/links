import React, { useCallback, useContext, useEffect, useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/auth.context";
import { Loader } from "../components/Loader";
import LinksList from "../components/LinksList";

const useStyles = makeStyles({
  auth: {
    marginTop: "50px",
    display: "grid",
    placeItems: "center",
  },
});

export const Create = () => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [link, setLink] = useState("");

  const [links, setLinks] = useState([]);
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("api/link", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) return <Loader />;

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
      } catch (e) {}
    }
  };

  return (
    <div className={classes.auth}>
      <TextField
        autoFocus
        required
        name="Link"
        label="Add Link"
        placeholder="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        onKeyPress={pressHandler}
      />
      {!loading && <LinksList links={links} />}
    </div>
  );
};

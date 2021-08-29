import React, { useContext, useState } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/auth.context";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  auth: {
    marginTop: "50px",
    display: "grid",
    placeItems: "center",
  },
});

export const Create = () => {
  const classes = useStyles();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  const pressHandler = async (ev: React.KeyboardEvent) => {
    if (ev.key === "Enter") {
      try {
        const data = await request(
          "api/link/generate",
          "POST",
          {
            from: link,
          },
          { Authorization: `Bearer ${auth.token}` }
        );
        history.push(`/detail/${data.link._id}`);
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
    </div>
  );
};

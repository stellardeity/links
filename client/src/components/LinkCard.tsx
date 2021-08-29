import React from "react";
import { Link } from "../interfaces";
import { Loader } from "./Loader";

export const LinkCard = ({ link }: { link: Link | null }) => {
  if (!link) {
    return <Loader />;
  }

  return (
    <>
      <h2>Links</h2>
      <p>
        Short:{" "}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        From:{" "}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Count clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Date: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};

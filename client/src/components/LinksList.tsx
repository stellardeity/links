import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { ILink } from "../interfaces";

const LinksList = ({ links }: { links: Array<ILink> }) => {
  if (!links.length) {
    return <p>Links list is empty</p>;
  }
  return (
    <TableContainer style={{ marginTop: 10 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, i) => (
            <TableRow key={link._id}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">{link.from}</TableCell>
              <TableCell align="right"><Link to={`/detail/${link._id}`}>Open</Link></TableCell>
              <TableCell align="right">{link.clicks}</TableCell>
              <TableCell align="right">{link.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LinksList;

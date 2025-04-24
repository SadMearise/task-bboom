import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";

type Props = {
  headers: string[];
};

const Header: FC<Props> = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell key={index}>{header}</TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

export default Header;

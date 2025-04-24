import { FC } from "react";
import { Paper, SelectChangeEvent, Table, TableContainer } from "@mui/material";
import { User } from "../../types";
import { AccessLevel } from "../../types/enums";
import { Body, Header } from ".";

type Props = {
  headers: string[];
  onDeleteClick: (userId: User["id"]) => void;
  onRoleChange: (newRole: User["role"], user: User) => void;
  onAccessLevelChange: (event: SelectChangeEvent<AccessLevel>, user: User) => void;
};

const AccessControlTable: FC<Props> = ({
  headers,
  onDeleteClick,
  onRoleChange,
  onAccessLevelChange,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="access control table"
      >
        <Header headers={headers} />
        <Body
          onDeleteClick={onDeleteClick}
          onRoleChange={onRoleChange}
          onAccessLevelChange={onAccessLevelChange}
        />
      </Table>
    </TableContainer>
  );
};

export default AccessControlTable;

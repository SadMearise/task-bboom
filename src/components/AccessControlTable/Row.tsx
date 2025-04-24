import { FC } from "react";
import { SelectChangeEvent, TableCell, TableRow } from "@mui/material";
import { User } from "../../types";
import { AccessLevel } from "../../types/enums";
import AccessLevelSelector from "../AccessLevelSelector";
import RoleEditor from "../RoleEditor";
import DeleteButton from "../DeleteButton";

type Props = {
  user: User;
  onDeleteClick: () => void;
  onRoleChange: (newRole: User["role"]) => void;
  onAccessLevelChange: (event: SelectChangeEvent<AccessLevel>) => void;
  accessLevelOptions: AccessLevel[];
};

const Row: FC<Props> = ({
  user,
  onDeleteClick,
  onRoleChange,
  onAccessLevelChange,
  accessLevelOptions,
}) => {
  return (
    <TableRow
      key={user.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        component="th"
        scope="row"
      >
        {user.id}
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <RoleEditor
          role={user.role}
          onRoleChange={onRoleChange}
        />
      </TableCell>
      <TableCell>
        <AccessLevelSelector
          accessLevel={user.accessLevel}
          accessLevelOptions={accessLevelOptions}
          onAccessLevelChange={onAccessLevelChange}
        />
      </TableCell>
      <TableCell>
        <DeleteButton onDeleteClick={onDeleteClick} />
      </TableCell>
    </TableRow>
  );
};

export default Row;

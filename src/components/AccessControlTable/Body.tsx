import { SelectChangeEvent, TableBody } from "@mui/material";
import { FC } from "react";
import { User } from "../../types";
import useUserStore from "../../store/user";
import { AccessLevel } from "../../types/enums";
import RowContainer from "./RowContainer";

type Props = {
  onDeleteClick: (userId: User["id"]) => void;
  onRoleChange: (newRole: User["role"], user: User) => void;
  onAccessLevelChange: (event: SelectChangeEvent<AccessLevel>, user: User) => void;
};

const Body: FC<Props> = ({ onDeleteClick, onRoleChange, onAccessLevelChange }) => {
  const users = useUserStore((state) => state.users);

  return (
    <TableBody>
      {users.map((user) => (
        <RowContainer
          user={user}
          onDeleteClick={onDeleteClick}
          onRoleChange={onRoleChange}
          onAccessLevelChange={onAccessLevelChange}
          key={user.id}
        />
      ))}
    </TableBody>
  );
};

export default Body;

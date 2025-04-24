import { FC, memo } from "react";
import { SelectChangeEvent } from "@mui/material";
import { User } from "../../types";
import { AccessLevel } from "../../types/enums";
import Row from "./Row";
import { getAccessLevelValues } from "../../utils/helpers/accessLevel";

type Props = {
  user: User;
  onDeleteClick: (userId: User["id"]) => void;
  onRoleChange: (newRole: User["role"], user: User) => void;
  onAccessLevelChange: (event: SelectChangeEvent<AccessLevel>, user: User) => void;
};

const RowContainer: FC<Props> = ({ user, onDeleteClick, onRoleChange, onAccessLevelChange }) => {
  const handleRoleChange = (value: string) => {
    onRoleChange(value, user);
  };

  return (
    <Row
      user={user}
      onDeleteClick={() => onDeleteClick(user.id)}
      onRoleChange={handleRoleChange}
      onAccessLevelChange={(e) => onAccessLevelChange(e, user)}
      accessLevelOptions={getAccessLevelValues()}
    />
  );
};

export default memo(RowContainer);

import { TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { User } from "../types";

type Props = {
  role: string;
  onRoleChange: (newRole: User["role"]) => void;
};

const RoleEditor: FC<Props> = ({ role, onRoleChange }) => {
  const [localRole, setLocalRole] = useState(role);

  useEffect(() => {
    setLocalRole(role);
  }, [role]);

  const debouncedChange = useDebouncedCallback((value: string) => {
    onRoleChange(value);
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLocalRole(value);
    debouncedChange(value);
  };

  return (
    <TextField
      variant="standard"
      value={localRole}
      onChange={handleChange}
    />
  );
};

export default RoleEditor;

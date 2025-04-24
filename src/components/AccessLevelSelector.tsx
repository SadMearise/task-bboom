import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { AccessLevel } from "../types/enums";

type Props = {
  accessLevel: AccessLevel;
  accessLevelOptions: AccessLevel[];
  onAccessLevelChange: (event: SelectChangeEvent<AccessLevel>) => void;
};

const AccessLevelSelector: FC<Props> = ({
  accessLevel,
  accessLevelOptions,
  onAccessLevelChange,
}) => {
  return (
    <FormControl fullWidth>
      <Select
        value={accessLevel}
        onChange={onAccessLevelChange}
      >
        {accessLevelOptions.map((value, index) => (
          <MenuItem
            value={value}
            key={index}
          >
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AccessLevelSelector;

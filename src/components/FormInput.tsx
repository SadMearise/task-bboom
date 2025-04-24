import { TextField } from "@mui/material";
import { FC, memo } from "react";
import { SignInFormValues } from "../schemas/signInFormSchema";

type Props = {
  field: keyof SignInFormValues;
  error: boolean;
  label: string;
  value: string;
  onChange: (field: keyof SignInFormValues, value: string) => void;
  helperText?: string;
  type?: string;
};

const FormInput: FC<Props> = ({
  field,
  error,
  label,
  value,
  onChange,
  helperText,
  type = "text",
}) => {
  return (
    <TextField
      error={error}
      label={label}
      type={type}
      helperText={helperText}
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
    />
  );
};

export default memo(FormInput);

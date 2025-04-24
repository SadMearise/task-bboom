import { FC } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

type Props = {
  onDeleteClick: () => void;
};

const DeleteButton: FC<Props> = ({ onDeleteClick }) => {
  return (
    <Button onClick={onDeleteClick}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;

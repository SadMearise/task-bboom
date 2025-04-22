import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import styles from "./SignInForm.module.css";
import errorStyles from "../../styles/Error.module.css";
import { ContentContainer } from "../ContentContainer";
import {
  SignInFormValues,
  SignInFormError,
  signInFormSchema,
} from "../../schemas/signInFormSchema";

type Props = {
  className?: string;
};

const SignInForm: FC<Props> = ({ className }) => {
  const [formData, setFormData] = useState<SignInFormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<SignInFormError>();

  const validate = () => {
    const result = signInFormSchema.safeParse(formData);

    if (result.success) {
      return undefined;
    }

    return result.error.format();
  };

  const handleChange =
    (field: keyof SignInFormValues) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({
        ...prevData,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();

    if (validationErrors) {
      setErrors(validationErrors);

      return;
    }
  };

  return (
    <ContentContainer className={className}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Sign in</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <TextField
            error={!!errors?.email}
            label="Email"
            variant="outlined"
            helperText={errors?.email?._errors.join(", ")}
            value={formData.email}
            onChange={handleChange("email")}
          />
          <TextField
            error={!!errors?.password}
            label="Password"
            type="password"
            autoComplete="current-password"
            helperText={errors?.password?._errors.join(", ")}
            value={formData.password}
            onChange={handleChange("password")}
          />
          {errors?._errors && <div className={errorStyles.error}>{errors?._errors.join(", ")}</div>}
          <Button
            type="submit"
            variant="contained"
          >
            Sign in
          </Button>
        </form>
      </div>
    </ContentContainer>
  );
};

export default SignInForm;

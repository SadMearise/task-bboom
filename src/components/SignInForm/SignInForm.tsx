import { Button } from "@mui/material";
import { FC, useCallback, useState } from "react";
import styles from "./SignInForm.module.css";
import { ContentContainer } from "../ContentContainer";
import {
  SignInFormValues,
  SignInFormError,
  signInFormSchema,
} from "../../schemas/signInFormSchema";
import useAuth from "../../utils/hooks/useAuth";
import { useNavigate } from "react-router";
import { LINKS } from "../../utils/constants";
import { FormError } from "../FormError";
import FormInput from "../FormInput";

type Props = {
  className?: string;
};

const initialFormData = {
  email: "",
  password: "",
};

const SignInForm: FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [formData, setFormData] = useState<SignInFormValues>(initialFormData);
  const [errors, setErrors] = useState<SignInFormError>();

  const validate = () => {
    const result = signInFormSchema.safeParse(formData);

    if (result.success) {
      return undefined;
    }

    return result.error.format();
  };

  const handleChange = useCallback((field: keyof SignInFormValues, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  }, []);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();

    if (validationErrors) {
      setErrors(validationErrors);

      return;
    }

    const result = signIn(formData.email, formData.password);

    if (result.ok) {
      navigate(`/${LINKS.admin.route}`);
    } else if (result.error) {
      setErrors({ _errors: [result.error] });

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
          <FormInput
            error={!!errors?.email}
            label="Email"
            helperText={errors?.email?._errors.join(", ")}
            value={formData.email}
            onChange={handleChange}
            field="email"
          />
          <FormInput
            error={!!errors?.password}
            label="Password"
            type="password"
            helperText={errors?.password?._errors.join(", ")}
            value={formData.password}
            onChange={handleChange}
            field="password"
          />
          {errors?._errors && errors._errors.length > 0 && (
            <FormError message={errors._errors.join(", ")} />
          )}
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

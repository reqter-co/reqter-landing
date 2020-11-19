import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "@Hooks/useAuth";
import Input from "@Shared/components/Form/Password/password.component";
import useDataPath from "@Hooks/useDataPath";
import { ILogin } from "@Interfaces/login";
import CustomButton from "@Shared/components/Button";
import { Content, Title, Description } from "./styles";
import tw from "twin.macro";
import useNotify from "@Hooks/useNotify";

type Props = {
  data: Partial<ILogin>;
  token: string;
  onSuccessChangePassword: () => void;
};
type IFormProps = {
  password: string;
  confirmPassword: string;
};

const ResetPass = ({ data, token, onSuccessChangePassword }: Props) => {
  const loginPage = data;
  const { _forgotPassResetPass } = useAuth();
  const { showNotify } = useNotify();
  const { register, errors, handleSubmit, watch } = useForm<IFormProps>();
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = ({ password }: IFormProps) => {
    if (!loading) {
      toggleLoading(true);
      _forgotPassResetPass(
        token,
        password,
        () => {
          toggleLoading(false);
          if (onSuccessChangePassword) {
            onSuccessChangePassword();
          }
        },
        (error) => {
          toggleLoading(false);
          showNotify({
            type: "error",
            description: "error",
          });
        }
      );
    }
  };
  return (
    <Content onSubmit={handleSubmit(onSubmit)}>
      <Title>{getKeyValue(loginPage, "formtitle1", "Reset password")}</Title>
      <Description>
        {getKeyValue(loginPage, "formdescription1", "Enter new password")}
      </Description>
      <Input
        autoFocus
        placeholder={getKeyValue(
          loginPage,
          "emailplaceholder1",
          "Enter password"
        )}
        name="password"
        ref={register({
          required: true,
          minLength: 6,
        })}
        hasError={errors.password ? true : false}
      />
      <Input
        placeholder={getKeyValue(
          loginPage,
          "emailplaceholder1",
          "Confirm password"
        )}
        name="confirmPassword"
        ref={register({
          required: true,
          minLength: 6,
          validate: (value) => value === watch("password"),
        })}
        hasError={errors.confirmPassword ? true : false}
      />
      <CustomButton
        type="submit"
        primary
        size="lg"
        cls={tw`mt-6`}
        loading={loading}
      >
        {getKeyValue(loginPage, "submittext1", "Reset")}
      </CustomButton>
    </Content>
  );
};
export default ResetPass;

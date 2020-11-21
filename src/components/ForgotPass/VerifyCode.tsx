import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "@Hooks/useAuth";
import Input from "@Shared/components/Form/Input";
import useDataPath from "@Hooks/useDataPath";
import { ILogin } from "@Interfaces/login";
import CustomButton from "@Shared/components/Button";
import { Content, Title, Description } from "./styles";
import tw from "twin.macro";
import useNotify from "@Hooks/useNotify";

type Props = {
  data: Partial<ILogin>;
  email: string;
  onSuccessVerifyCode: (token: string) => void;
};
type IFormProps = {
  code: string;
};

const VerifyCode = ({ data, email, onSuccessVerifyCode }: Props) => {
  const loginPage = data;
  const { _forgotPassVerifyCode } = useAuth();
  const { showNotify } = useNotify();
  const { register, errors, handleSubmit } = useForm<IFormProps>();
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = ({ code }: IFormProps) => {
    if (!loading) {
      toggleLoading(true);
      _forgotPassVerifyCode(
        email,
        code,
        (token) => {
          toggleLoading(false);
          if (onSuccessVerifyCode) {
            onSuccessVerifyCode(token);
          }
        },
        () => {
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
    <Content onSubmit={handleSubmit(onSubmit)} className="fade-in">
      <Title>{getKeyValue(loginPage, "formtitle1", "Verify sent code")}</Title>
      <Description>
        {getKeyValue(loginPage, "formdescription1", "Enter the code just sent")}
      </Description>
      <Input
        type="email"
        autoFocus
        placeholder={getKeyValue(loginPage, "emailplaceholder", "Enter code")}
        name="email"
        ref={register({
          required: true,
          minLength: 4,
        })}
        hasError={errors.code ? true : false}
      />
      <CustomButton
        type="submit"
        primary
        size="lg"
        cls={tw`mt-6`}
        loading={loading}
      >
        {getKeyValue(loginPage, "submittext1", "Verify code")}
      </CustomButton>
    </Content>
  );
};
export default VerifyCode;

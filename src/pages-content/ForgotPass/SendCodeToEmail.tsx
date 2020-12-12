import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "@Hooks/useAuth";
import Input from "@Shared/components/Form/Input";
import useDataPath from "@Hooks/useDataPath";
import { ILogin } from "@Interfaces/login";
import { emailPattern } from "@Shared/helper/patterns";
import CustomButton from "@Shared/components/Button";
import { Content, Title, Description } from "./styles";
import useNotify from "@Hooks/useNotify";
import tw from "twin.macro";

type Props = {
  data: Partial<ILogin>;
  onSuccessSendCode: (email: string) => void;
};
type IFormProps = {
  email: string;
};

const SendCodeToEmail = ({ onSuccessSendCode, data }: Props) => {
  const loginPage = data;
  const { _forgotPassSendCode } = useAuth();
  const { showNotify } = useNotify();
  const { register, errors, handleSubmit } = useForm<IFormProps>();
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = ({ email }: IFormProps) => {
    if (!loading) {
      toggleLoading(true);
      _forgotPassSendCode(
        email,
        () => {
          toggleLoading(false);
          if (onSuccessSendCode) {
            onSuccessSendCode(email);
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
    <Content onSubmit={handleSubmit(onSubmit)}className="fade-in">
      <Title>
        {getKeyValue(loginPage, "formtitle1", "Get recovery password")}
      </Title>
      <Description>
        {getKeyValue(loginPage, "formdescription1", "Enter your signed email")}
      </Description>
      <Input
        type="email"
        autoFocus
        placeholder={getKeyValue(
          loginPage,
          "emailplaceholder1",
          "Enter your email"
        )}
        name="email"
        ref={register({
          required: true,
          pattern: emailPattern,
        })}
        hasError={errors.email ? true : false}
      />
      <CustomButton
        type="submit"
        primary
        size="lg"
        cls={tw`mt-6`}
        loading={loading}
      >
        {getKeyValue(loginPage, "submittext1", "Send Code")}
      </CustomButton>
    </Content>
  );
};
export default SendCodeToEmail;

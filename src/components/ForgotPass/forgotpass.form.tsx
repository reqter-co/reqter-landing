import { useForm } from "react-hook-form";
import useAuth from "@Hooks/useAuth";
import Input from "@Shared/components/Form/Input";
import Link from "@Shared/components/Link";
import useDataPath from "@Hooks/useDataPath";
import { ILogin } from "@Interfaces/login";
import { emailPattern } from "@Shared/helper/patterns";
import {
  Content,
  Title,
  Description,
  Submit,
  SignupRow,
  SignupText,
  SignupLinkText,
} from "./styles";

type Props = {
  data: ILogin;
};
type IFormProps = {
  email: string;
  password: string;
};

const LoginForm = ({ data }: Props) => {
  const loginPage = data;
  const { handleLoginSuccess } = useAuth();
  const { register, errors, handleSubmit } = useForm<IFormProps>();
  const { getKeyValue } = useDataPath();

  const onSubmit = ({ email, password }: IFormProps) => {
    console.log(email, password);
    handleLoginSuccess("11-aa-22");
  };
  return (
    <Content onSubmit={handleSubmit(onSubmit)}>
      <Title>{getKeyValue(loginPage, "formtitle")}</Title>
      <Description>{getKeyValue(loginPage, "formdescription")}</Description>
      <Input
        type="email"
        autoFocus
        placeholder={getKeyValue(loginPage, "emailplaceholder")}
        name="email"
        ref={register({
          required: true,
          pattern: emailPattern,
        })}
        hasError={errors.email ? true : false}
      />
      <Submit type="submit">{getKeyValue(loginPage, "submittext")}</Submit>
      <SignupRow>
        <SignupText>{getKeyValue(loginPage, "signuptext")}</SignupText>
        <SignupLinkText>
          <Link href="/signup">{getKeyValue(loginPage, "signuplinktext")}</Link>
        </SignupLinkText>
      </SignupRow>
    </Content>
  );
};
export default LoginForm;

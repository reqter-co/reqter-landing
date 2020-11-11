import tw from "twin.macro";
import { useForm } from "react-hook-form";
import useAuth from "@Hooks/useAuth";
import Input from "@Shared/components/Form/Input";
// import Icon from "@Shared/components/Icon";
// import LineCenterText from "@Shared/components/LineCenterText";
import Link from "@Shared/components/Link";
import useDataPath from "@Hooks/useDataPath";
import { ILogin } from "@Interfaces/login";
import { emailPattern } from "@Shared/helper/patterns";
import CustomButton from "@Shared/components/Button";
import {
  Content,
  Title,
  Description,
  ForgotPassword,
  SignupRow,
  SignupText,
  SignupLinkText,
} from "./styles";
import { useState } from "react";

type Props = {
  data: ILogin;
};
type IFormProps = {
  email: string;
  password: string;
};

const LoginForm = ({ data }: Props) => {
  const loginPage = data;
  const { _login } = useAuth();
  const { register, errors, handleSubmit } = useForm<IFormProps>({
    defaultValues: {
      email: "reqter@reqter.com",
      password: "logrezaee24359",
    },
  });
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = ({ email, password }: IFormProps) => {
    if (!loading) {
      toggleLoading(true);
      _login(email, password, () => {
        toggleLoading(false);
      });
    }
  };
  // function handleSocialLogin(user: any) {}
  // function handleSocialLoginFailure(error: any) {}
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
      <Input
        placeholder={getKeyValue(loginPage, "passwordplaceholder")}
        name="password"
        ref={register({
          required: true,
          minLength: 6,
        })}
        hasError={errors.password ? true : false}
      />
      <div>
        <ForgotPassword>
          <Link href="/forgot-pass">
            {getKeyValue(loginPage, "forgotpasstext")}
          </Link>
        </ForgotPassword>
      </div>
      <CustomButton
        type="submit"
        primary
        size="lg"
        cls={tw`mt-6`}
        loading={loading}
      >
        {getKeyValue(loginPage, "submittext")}
      </CustomButton>
      {/* <LineCenterText label={getKeyValue(loginPage, "socialboxtitle")} />
      <SocialButtons>
        <Button>
          <Icon name="google" />
        </Button>
        <Button>
          <Icon name="linkedin" />
        </Button>
      </SocialButtons> */}
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

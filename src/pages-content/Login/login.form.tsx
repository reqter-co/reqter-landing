import { queryCache } from "react-query";
import tw from "twin.macro";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "@Hooks/useAuth";
import useRouter from "@Hooks/useRouter";
import Input from "@Shared/components/Form/Input";
import PasswordInput from "@Shared/components/Form/Password/password.component";
// import Icon from "@Shared/components/Icon";
// import LineCenterText from "@Shared/components/LineCenterText";
import Link from "@Shared/components/Link";
import useDataPath from "@Hooks/useDataPath";
import { ILogin } from "@Interfaces/login";
import { emailPattern } from "@Shared/helper/patterns";
import CustomButton from "@Shared/components/Button";
import useNotify from "@Hooks/useNotify";
import {
  Content,
  Title,
  Description,
  ForgotPassword,
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
  const { _login } = useAuth();
  const { push } = useRouter();
  const { showNotify } = useNotify();
  const { register, errors, handleSubmit } = useForm<IFormProps>({
    defaultValues: {
      // email: process.env.NEXT_PUBLIC_LOGIN_USERNAME || "",
      email: "",
      // password: process.env.NEXT_PUBLIC_LOGIN_PASSWORD || "",
      password: "",
    },
  });
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = ({ email, password }: IFormProps) => {
    if (!loading) {
      toggleLoading(true);
      _login(
        email,
        password,
        () => {
          queryCache.setQueryData("user", null);
          toggleLoading(false);
          push("/spaces");
        },
        () => {
          toggleLoading(false);
          showNotify({
            type: "error",
            description: "Error in login",
          });
        }
      );
    }
  };
  // function handleSocialLogin(user: any) {}
  // function handleSocialLoginFailure(error: any) {}
  return (
    <Content onSubmit={handleSubmit(onSubmit)} className="fade-in">
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
      <PasswordInput
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

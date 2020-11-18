import tw from "twin.macro";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useRouter from "@Hooks/useRouter";
import Input from "@Shared/components/Form/Input";
import { notify } from "@Shared/components/Toast/toast.component";
// import Icon from "@Shared/components/Icon";
import Link from "@Shared/components/Link";
// import LineCenterText from "@Shared/components/LineCenterText";
import useDataPath from "@Hooks/useDataPath";
import { ISignUpPage } from "@Interfaces/signupPage";
import { emailPattern } from "@Shared/helper/patterns";
import CustomButton from "@Shared/components/Button";
import useAuth from "@Hooks/useAuth";
import PasswordInput from "@Shared/components/Form/Password/password.component";
import {
  Content,
  Title,
  Description,
  HavLoginBox,
  SignupText,
  SignupLinkText,
} from "./styles";

type Props = {
  data: ISignUpPage;
};
type IFormProps = {
  email: string;
  password: string;
  fullname: string;
};

const SignUpForm = ({ data }: Props) => {
  const signupPage = data;
  const { _signUp } = useAuth();
  const { push } = useRouter();
  const { register, errors, handleSubmit } = useForm<IFormProps>();
  const { getKeyValue } = useDataPath();
  const [loading, toggleLoading] = useState(false);

  const onSubmit = ({ fullname, email, password }: IFormProps) => {
    if (!loading) {
      toggleLoading(true);
      _signUp(fullname, email, password, (result) => {
        toggleLoading(false);
        if (!result.success) {
          notify({
            description: result.error,
            type: "success",
          });
        } else {
          push("/home");
        }
      });
    }
  };
  return (
    <Content onSubmit={handleSubmit(onSubmit)}>
      <Title>{getKeyValue(signupPage, "formtitle")}</Title>
      <Description>{getKeyValue(signupPage, "formdescription")}</Description>
      <Input
        type="text"
        autoFocus
        placeholder={getKeyValue(signupPage, "fullnameplaceholder")}
        name="fullname"
        ref={register({
          required: true,
        })}
        hasError={errors.fullname ? true : false}
      />
      <Input
        type="email"
        placeholder={getKeyValue(signupPage, "emailplaceholder")}
        name="email"
        ref={register({
          required: true,
          pattern: emailPattern,
        })}
        hasError={errors.email ? true : false}
      />
      <PasswordInput
        placeholder={getKeyValue(signupPage, "passwordplaceholder")}
        name="password"
        ref={register({
          required: true,
          minLength: 6,
        })}
        hasError={errors.password ? true : false}
      />
      <CustomButton
        type="submit"
        primary
        size="lg"
        cls={tw`mt-6`}
        loading={loading}
      >
        {getKeyValue(signupPage, "submittext")}
      </CustomButton>
      {/* <LineCenterText label={getKeyValue(signupPage, "socialboxtitle")} />
      <SocialButtons>
        <Button>
          <Icon name="google" />
        </Button>
        <Button>
          <Icon name="linkedin" />
        </Button>
      </SocialButtons> */}
      <HavLoginBox>
        <SignupText>{getKeyValue(signupPage, "logintext")}</SignupText>
        <SignupLinkText>
          <Link href="/login">{getKeyValue(signupPage, "loginlinktext")}</Link>
        </SignupLinkText>
      </HavLoginBox>
    </Content>
  );
};
export default SignUpForm;

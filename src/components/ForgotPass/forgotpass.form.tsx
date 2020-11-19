import { useState } from "react";
import { ILogin } from "@Interfaces/login";
import SendCodeToEmail from "./SendCodeToEmail";
import VerifyCode from "./VerifyCode";
import ResetPassword from "./ResetPassword";
import Success from "./Success";
type Props = {
  data: ILogin;
};

const ForgetPassWizard = ({ data }: Props) => {
  const loginPage = data;

  const [tab, changeTab] = useState(1);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const handleSuccessSendCode = (email: string) => {
    setEmail(email);
    changeTab(2);
  };
  const handleSuccessVerifyCode = (token: string) => {
    setToken(token);
    changeTab(3);
  };
  const handleSuccessChangePassword = () => changeTab(4);

  return tab === 1 ? (
    <SendCodeToEmail
      data={loginPage}
      onSuccessSendCode={handleSuccessSendCode}
    />
  ) : tab === 2 ? (
    <VerifyCode
      data={loginPage}
      email={email}
      onSuccessVerifyCode={handleSuccessVerifyCode}
    />
  ) : tab === 3 ? (
    <ResetPassword
      data={loginPage}
      token={token}
      onSuccessChangePassword={handleSuccessChangePassword}
    />
  ) : tab === 4 ? (
    <Success />
  ) : null;
};
export default ForgetPassWizard;

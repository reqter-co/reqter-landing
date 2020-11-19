import storage from "../../services/storage";
import { useAuthState, useAuthDispatch } from "@Contexts/auth/auth.provider";
// import useRouter from "@Hooks/useRouter";
// import { mutate } from "swr";
import {
  login,
  signUp,
  forgotPass_SendCode,
  forgotPass_VerifyCode,
  forgotPass_ResetPass,
} from "@Core/api/auth";
import { IUser, ISignUpFailed } from "@Interfaces/user";

const useAuth = () => {
  const dispatch = useAuthDispatch();
  // const { push } = useRouter();
  const isAuthenticated = useAuthState("isAuthenticated");
  const isLoggedOutFromHeaderMenu = useAuthState("isLoggedOutFromHeaderMenu");
  const redirectPage = useAuthState("redirectPage");
  const handleLoginSuccess = (token: string) => {
    storage.setItem("@caaser-token", token);
    dispatch({ type: "LOGIN_SUCCESS" });
    // const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_LOGIN_ADDRESS;
    // if (redirectUrl) {
    //   window.location.href = redirectUrl;
    // } else {
    //   window.location.reload();
    // }

    // if (redirectPage) {
    //   mutate("api_user", null);
    //   push(redirectPage);
    // } else {
    //   push("/home");
    // }
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    storage.removeItem("@caaser-token");
  };
  const setRedirectPage = (pageName: string) => {
    dispatch({ type: "SET_REDIRECT_PAGE", payload: pageName });
  };

  const _login = async (
    username: string,
    password: string,
    onFinished: (result: any) => void
  ) => {
    try {
      const result = await login(username, password);
      if (result) handleLoginSuccess(result?.access_token);
      if (onFinished) {
        onFinished(result);
      }
    } catch (error) {
      if (onFinished) {
        onFinished(error);
      }
    }
  };
  const _signUp = async (
    fullname: string,
    email: string,
    password: string,
    onFinished: (result: IUser | ISignUpFailed | null) => void
  ) => {
    try {
      const result = await signUp(fullname, email, password);
      dispatch({ type: "LOGIN_SUCCESS" });
      onFinished(result);
    } catch (error) {
      if (onFinished) {
        onFinished(error);
      }
    }
  };
  const _forgotPassSendCode = async (
    email: string,
    onSuccess: () => void,
    onError: (error: any) => void
  ) => {
    try {
      await forgotPass_SendCode(email);
      if (onSuccess) onSuccess();
    } catch (error) {
      if (onError) onError(error);
    }
  };
  const _forgotPassVerifyCode = async (
    email: string,
    code: string,
    onSuccess: (token: string) => void,
    onError: (error: any) => void
  ) => {
    try {
      const result = await forgotPass_VerifyCode(email, code);
      const token = result ? result.access_token : "";
      onSuccess(token);
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  };
  const _forgotPassResetPass = async (
    token: string,
    newPassword: string,
    onSuccess: () => void,
    onError: (error: any) => void
  ) => {
    try {
      await forgotPass_ResetPass(token, newPassword);
      onSuccess();
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  };

  return {
    _login,
    _signUp,
    redirectPage,
    setRedirectPage,
    isAuthenticated,
    isLoggedOutFromHeaderMenu,
    handleLoginSuccess,
    logout,
    _forgotPassSendCode,
    _forgotPassVerifyCode,
    _forgotPassResetPass,
  };
};

export default useAuth;

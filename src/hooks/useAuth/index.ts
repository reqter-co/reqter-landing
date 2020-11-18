import storage from "../../services/storage";
import { useAuthState, useAuthDispatch } from "@Contexts/auth/auth.provider";
// import useRouter from "@Hooks/useRouter";
// import { mutate } from "swr";
import { login, signUp } from "@Core/api/auth";
import { IUser, ISignUpFailed } from "@Interfaces/user";

const useAuth = () => {
  const dispatch = useAuthDispatch();
  // const { push } = useRouter();
  const isAuthenticated = useAuthState("isAuthenticated");
  const isLoggedOut = useAuthState("isLoggedOut");
  const redirectPage = useAuthState("redirectPage");
  const isRedirected = useAuthState("isRedirected");
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
    storage.removeItem("@caaser-token");
    dispatch({ type: "LOGOUT" });
  };
  const setRedirectPage = (pageName: string) => {
    dispatch({ type: "SET_REDIRECT_PAGE", payload: pageName });
  };
  return {
    _login,
    _signUp,
    isRedirected,
    redirectPage,
    setRedirectPage,
    isAuthenticated,
    isLoggedOut,
    handleLoginSuccess,
    logout,
  };
};

export default useAuth;

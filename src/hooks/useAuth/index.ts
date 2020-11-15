import storage from "../../services/storage";
import { useAuthState, useAuthDispatch } from "@Contexts/auth/auth.provider";
// import useRouter from "@Hooks/useRouter";
// import { mutate } from "swr";
import { login } from "@Core/api/auth";

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
    onFinished: () => void
  ) => {
    try {
      const result = await login(username, password);
      if (onFinished) {
        onFinished();
      }
      if (result) handleLoginSuccess(result?.access_token);
    } catch (error) {
      if (onFinished) {
        onFinished();
      }
      alert(error);
    }
  };
  const handleLoginSuccess = (token: string) => {
    storage.setItem("@caaser-token", token);
    const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_LOGIN_ADDRESS;
    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      window.location.reload();
    }

    // if (redirectPage) {
    //   mutate("api_user", null);
    //   push(redirectPage);
    // } else {
    //   push("/home");
    // }
    // dispatch({ type: "LOGIN_SUCCESS" });
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

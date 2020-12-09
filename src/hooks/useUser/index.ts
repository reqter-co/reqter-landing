import { useEffect } from "react";
import { useQuery, queryCache } from "react-query";
import useRouter from "@Hooks/useRouter";
import { getUserInfo } from "@Core/api/auth";
import { IUser } from "@Interfaces/user";
type Props = {
  redirectTo?: string;
};
export default function useUser({ redirectTo = "" }: Props) {
  const { push } = useRouter();
  const {
    isLoading,
    isError,
    data: user,
    error,
    status,
    isFetching,
  } = useQuery("user", getUserInfo, { retry: false });

  useEffect(() => {
    if (!redirectTo) return;
    if (isError) {
      if (redirectTo) {
        push(redirectTo);
      }
    }
  }, [status,isError]);

  function clearUser() {
    queryCache.setQueryData("user", null);
  }
  function setUser(user: IUser) {
    queryCache.setQueryData("user", user);
  }

  return {
    user,
    isLoading,
    isError,
    error,
    status,
    isFetching,
    clearUser,
    setUser,
  };
}

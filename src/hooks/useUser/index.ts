import { useEffect } from "react";
import { useQuery } from "react-query";
import useRouter from "@Hooks/useRouter";
import { getUserInfo } from "@Core/api/auth";
type Props = {
  redirectTo?: string;
};
export default function useUser({ redirectTo = "" }: Props) {
  const {
    isLoading,
    isError,
    data: user,
    error,
    status,
    isFetching,
  } = useQuery("user", getUserInfo);
  const { push } = useRouter();
  useEffect(() => {
    if (!redirectTo) return;
    if (status === "error") {
      if (redirectTo) {
        push(redirectTo);
      }
    }
  }, [status]);

  return { user, isLoading, isError, error, status, isFetching };
}

import { useEffect } from "react";
import useSWR from "swr";
import useRouter from "@Hooks/useRouter";
import { getUserInfo } from "@Core/api/auth";
import useAuth from "@Hooks/useAuth";
type Props = {
  redirectTo?: string;
};
export default function useUser({ redirectTo = "" }: Props) {
  const { data: user, mutate: mutateUser, error } = useSWR(
    "user-api",
    getUserInfo
  );
  const { isLoggedOutFromHeaderMenu } = useAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (!redirectTo) return;
    if (!isLoggedOutFromHeaderMenu) {
      if (error) {
        if (redirectTo) {
          push(redirectTo);
        }
      }
    }
  }, [user, error, redirectTo]);

  return { user, mutateUser };
}

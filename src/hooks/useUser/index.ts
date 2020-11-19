import { useEffect } from "react";
import useSWR from "swr";
import useRouter from "@Hooks/useRouter";
import { getUserInfo } from "@Core/api/auth";
import useAuth from "@Hooks/useAuth";
type Props = {
  redirectTo?: boolean | string;
};
export default function useUser({ redirectTo = false }: Props) {
  const { isLoggedOutFromHeaderMenu } = useAuth();
  const { data: user, mutate: mutateUser } = useSWR("/api/user", getUserInfo);
  const { push } = useRouter();
  useEffect(() => {
    if (!redirectTo) return;
    if (redirectTo && !user) {
      if (!isLoggedOutFromHeaderMenu) {
        push(redirectTo as string);
      }
    }
  }, [user, redirectTo]);

  return { user, mutateUser };
}

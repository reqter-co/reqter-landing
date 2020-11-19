import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import useRouter from "@Hooks/useRouter";
import { getUserInfo } from "@Core/api/auth";
import storage from "src/services/storage";
import { debug } from "console";
type Props = {
  redirectTo?: boolean | string;
  redirectIfFound?: boolean;
};
export default function useUser({
  redirectTo = false,
  redirectIfFound = false,
}: Props) {
  const { data: user, mutate: mutateUser, error } = useSWR(
    "/api/user",
    getUserInfo
  );
  const { push } = useRouter();
  const loading = (!user || (user && !user.auth)) && !error;
  const loggedOut = !user || (user && !user.auth);

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo) return;
    if (!loading) {
      if (redirectTo) {
        push(redirectTo as string);
      }
      if (loggedOut) {
        if (user) {
          mutateUser(null);
        }
      }
    }

    // if (
    //   // If redirectTo is set, redirect if the user was not found.
    //   (redirectTo && !redirectIfFound && !user) ||
    //   // If redirectIfFound is also set, redirect if the user was found
    //   (redirectIfFound && user)
    // ) {
    //   storage.removeItem("@caaser-token");
    //   mutateUser();
    //   push(redirectTo as string);
    // }
  }, [user, error, loggedOut]);

  return { user, mutateUser };
}
// import useSWR from "swr";
// // const fetcher = (url: string) => fetch(url).then((res) => res.json());
// // const end_point_url = '/'

// import { getUserInfo } from "@Core/api/auth";
// export default function useUser() {
//   //   const { data, mutate, error } = useSWR("/api/user.json", fetcher);
//   const { data, mutate, error } = useSWR("api_user", getUserInfo);
//   const loading = !data && !error;
//   const loggedOut = error && (error.status === 403 || error.status === 401);

//   const addOrUpdateContactNumber = async (contact: string) => {
//     console.log(contact, "contact");
//     // return await fetch(end_point_url,{method: 'POST', body: contact });
//   };
//   const addOrUpdateAddress = async (address: string) => {
//     console.log(address, "address");

//     // return await fetch(end_point_url,{method: 'POST', body: address });
//   };
//   const addOrUpdatePaymentCard = async (payment_card: string) => {
//     console.log(payment_card, "payment_card");

//     // return await fetch(end_point_url,{method: 'POST', body: payment_card });
//   };
//   const deleteContactNumber = async (contactId: string) => {
//     console.log(contactId, "contactId");

//     // return await fetch(end_point_url,{method: 'POST', body: contactId });
//   };
//   const deleteAddress = async (addressId: string) => {
//     console.log(addressId, "addressId");

//     // return await fetch(end_point_url,{method: 'POST', body: addressId });
//   };
//   const deletePaymentCard = async (cardId: string) => {
//     console.log(cardId, "cardId");

//     // return await fetch(end_point_url,{method: 'POST', body: cardId });
//   };

//   return {
//     user: data,
//     loading,
//     loggedOut,
//     mutate,
//     error,
//     addOrUpdateContactNumber,
//     addOrUpdateAddress,
//     addOrUpdatePaymentCard,
//     deleteContactNumber,
//     deleteAddress,
//     deletePaymentCard,
//   };
// }

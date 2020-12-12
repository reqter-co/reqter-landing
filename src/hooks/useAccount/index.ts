import { ACCOUNT_SIDEBAR_ITEMS } from "@Shared/site-settings/site-navigation";
// import {
//   useAccountState,
//   useAccountDispatch,
// } from "@Contexts/account/account.provider";

const useAccount = () => {
  // const dispatch = useAccountDispatch();
  return { sidebarMenu: ACCOUNT_SIDEBAR_ITEMS };
};

export default useAccount;

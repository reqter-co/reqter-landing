import { useCreateContext } from "../create-context";
import { accountReducer, initialState } from "./account.reducer";

const [state, dispatch, provider] = useCreateContext<any, any>(
  accountReducer,
  initialState
);
export const useAccountState = state;
export const useAccountDispatch = dispatch;
export const AccountProvider = provider;

export const initialState = {
  user: null,
};

type ActionType = { type: "" };

type StateType = typeof initialState;

export function accountReducer(
  state: StateType,
  action: ActionType
): StateType {
  switch (action.type) {
    default: {
      return state;
      // throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}

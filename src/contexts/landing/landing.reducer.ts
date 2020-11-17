export const initialState = {};

type ActionType = { type: "NEEDS_SET_SELECTED"; payload: any };

type StateType = typeof initialState;

export function landingReducer(
  state: StateType,
  action: ActionType
): StateType {
  switch (action.type) {
    case "NEEDS_SET_SELECTED":
      return {
        ...state,
      };
    default: {
      return state;
      // throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}

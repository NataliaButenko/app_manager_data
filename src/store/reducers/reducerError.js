import { ERROR } from "../actions/users-action/register-user";

const initialState = false;
export const reducerError = (state = initialState, action) => {
  switch (action.type) {
    case ERROR: {
      return action.payload
    }
    default: {
      return state;
    }
  }
};

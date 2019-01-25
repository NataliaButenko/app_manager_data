import { SET_TOKEN } from "../actions/token-action/setToken";

const initState = localStorage.getItem("token") || '';

export const reducerToken = (state = initState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return action.payload
    }
    default: {
      return state;
    }
  }
};

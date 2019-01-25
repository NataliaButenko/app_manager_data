import { LOADING_FALSE } from "../actions/loading-action/isLoading";
import { LOADING_TRUE } from "../actions/loading-action/isLoading";

const initialState = false;

export const reducerLoading = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FALSE: {
      return action.payload
    }
    case LOADING_TRUE: {
      return action.payload
    }
    default: {
      return state;
    }
  }
};

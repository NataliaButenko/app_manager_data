import { SEARCH } from "../actions/search-action/search";

export const reducerSearch = (state = '', action) => {
  switch (action.type) {
    case SEARCH: {
      return action.payload
    }
    default: {
      return state
    }
  }
};

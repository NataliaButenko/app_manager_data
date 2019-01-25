import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reducerUsers } from "./reducerUsers";
import { reducerToken } from "./reducerToken";
import { reducerSearch } from "./reducerSearch";
import { reducerError } from "./reducerError";
import { reducerLoading } from "./reducerLoading";

export const rootReducer = combineReducers({
  users: reducerUsers,
  token: reducerToken,
  search: reducerSearch,
  error: reducerError,
  form: formReducer,
  loading: reducerLoading
});

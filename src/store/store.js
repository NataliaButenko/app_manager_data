import { rootReducer } from "./reducers/root-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const SetAxiosToken = ({ getState }) => next => action => {
  const token = getState().token;
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    axios.defaults.headers.common['Authorization'] = null;
  }
  next(action);
};

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(SetAxiosToken, thunk)));

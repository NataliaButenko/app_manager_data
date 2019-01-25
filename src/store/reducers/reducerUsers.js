import { REGISTER_USER } from "../actions/users-action/register-user";
import { ENTRY_USER_LIST } from "../actions/users-action/entry-user-list";
import { DELETE_USER_BY_ID } from "../actions/users-action/delete-user";
import { UPDATE_USER_BY_ID } from "../actions/users-action/update-user";

const initialState = [];

export const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      return [...state, action.payload.user];
    }
    case ENTRY_USER_LIST: {
      return [ ...action.payload] ;
    }
    case DELETE_USER_BY_ID: {
      return state.filter(user => user.id !== action.payload);
    }
    case UPDATE_USER_BY_ID: {
      return state.map(user => {
        if(user.id === action.payload.id) {
          return action.payload
        } else {
          return user
        }
      });
    }
    default: {
      return state;
    }
  }
};

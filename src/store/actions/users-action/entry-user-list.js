import { history } from "../../../App";
import { LOADING_TRUE, LOADING_FALSE } from "../loading-action/isLoading";
import { axiosInit } from "../../../axiosBaseUrl";

export const ENTRY_USER_LIST = 'entry_user_list';

export const entryUserListAsync = () => {
  return dispatch => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    return axiosInit.get('users')
      .then(respons => {
        dispatch({
          type: ENTRY_USER_LIST,
          payload: respons.data
        });
      })
      .catch(error =>
        history.push("/login-page")
      )
      .finally(() => {
        dispatch({
          type: LOADING_FALSE,
          payload: false
        });
      });
  };
};

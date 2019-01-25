import { history } from "../../../App";
import { LOADING_TRUE, LOADING_FALSE } from "../loading-action/isLoading";
import { axiosInit } from "../../../axiosBaseUrl";

export const UPDATE_USER_BY_ID = 'update_user_by_id';

export const updateUserByIdAsync = (user) => {
  return dispatch => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    return axiosInit.put('users/' + user.id, user)
      .then(response => {
        dispatch({
          type: UPDATE_USER_BY_ID,
          payload: user
        });
        history.push('/content-page');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: LOADING_FALSE,
          payload: false
        });
      });
  };
};

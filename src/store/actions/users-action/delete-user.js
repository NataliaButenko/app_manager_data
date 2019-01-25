import { LOADING_TRUE, LOADING_FALSE } from "../loading-action/isLoading";
import { axiosInit } from "../../../axiosBaseUrl";

export const DELETE_USER_BY_ID = 'delete_user_by_id';

export const deleteUserByIdAsync = (token, userId) => {
  return dispatch => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    return axiosInit.delete('users/' + userId)
      .then(response => {
        dispatch({
          type: DELETE_USER_BY_ID,
          payload: userId
        })
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

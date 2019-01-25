import { history } from '../../../App';
import { LOADING_TRUE, LOADING_FALSE } from "../loading-action/isLoading";
import { axiosInit } from "../../../axiosBaseUrl";

export const REGISTER_USER = "register_user";

export const ERROR = 'error';

export const registerUserAsync = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    return axiosInit.post('register', user)
      .then(response => {
        dispatch({type: REGISTER_USER, payload: {user: response.data.user}});
        history.push('/content-page');
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: true
        })
      })
      .finally(() => {
        dispatch({
          type: LOADING_FALSE,
          payload: false
        });
      });
  }
};

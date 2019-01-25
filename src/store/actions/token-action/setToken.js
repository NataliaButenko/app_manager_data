import { LOADING_FALSE, LOADING_TRUE } from "../loading-action/isLoading";
import { axiosInit } from "../../../axiosBaseUrl";

export const SET_TOKEN = 'setToken';

export const setTokenAsync = (user, history) => {
  return dispatch => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    return axiosInit.post('login', user)
      .then(response => {
        let token = response.data.token;
        localStorage.setItem("token", token);
        dispatch({
          type: SET_TOKEN,
          payload: token
        });
        history.push('/content-page');
      })
      .catch(error => {
        history.push('/registration-page');
      })
      .finally(() => {
        dispatch({
          type: LOADING_FALSE,
          payload: false
        });
      });
  }
};

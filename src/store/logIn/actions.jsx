import * as types from "./types"
export const attemptLogIn = (payload) => ({
    type: types.ATTEMPT_LOGIN,
    
  });
  export const logInSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload,
    
  })
  export const logInFail = (payload) => ({
    type: types.LOGIN_FAIL,
    payload 
  })
import { RSERVATION_TYPE } from "../Type";

const { SET_SEAT_DATA, SET_USER_DATA } = RSERVATION_TYPE;

export const setSeatData = (payload) => ({
  type: SET_SEAT_DATA,
  payload,
});

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

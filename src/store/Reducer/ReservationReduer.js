import { RSERVATION_TYPE } from "../Type";

const initialState = {
  seatData: [],
  userData: [],
};
const { SET_SEAT_DATA, SET_USER_DATA } = RSERVATION_TYPE;
const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEAT_DATA:
      return {
        ...state,
        seatData: [...state.seatData, action.payload],
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    default:
      return state;
  }
};

export default ReservationReducer;

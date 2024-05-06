import { RSERVATION_TYPE } from "../Type";

const initialState = {
  seatData: [],
  userData: [],
};
const { SET_SEAT_DATA, SET_USER_DATA, DELETE_USER_DATA, UPDATE_USER_DATA } =
  RSERVATION_TYPE;
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
    case DELETE_USER_DATA:
      return {
        ...state,
        userData: state.userData.filter((user) => user.id !== action.payload),
      };
    case UPDATE_USER_DATA:
      const updateUserData = state.userData.map((user) => {
        return user.id === action.payload.id ? action.payload : user;
      });
      return {
        ...state,
        userData: updateUserData,
      };
    default:
      return state;
  }
};

export default ReservationReducer;

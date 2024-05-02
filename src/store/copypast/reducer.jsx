import * as types from "./types"
const initialState={
    data:null,
    loading:false
}
const logInReducer = (state=initialState,{type,payload}) => {

    switch (types) {
        case types.ATTEMPT_LOGIN:
            return{
                ...state,
                
            }
        case types.LOGIN_SUCCESS:
            return{
                ...state,
            }
        case types.LOGIN_FAIL:
            return{
                ...state,
            }

        default:
            return state;
    }
}

export default logInReducer
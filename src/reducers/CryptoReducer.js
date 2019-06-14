import { FETCH_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from "../utils/ActionTypes";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
};

export default function(state=initialState, action){
    let newState;

    switch(action.type){
        case FETCH_COIN_DATA:
            newState=Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null,
            });
        break;
        case FETCHING_COIN_DATA_SUCCESS:
            newState = Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null,
            });
        break;
        case FETCHING_COIN_DATA_FAIL:
                newState = Object.assign({}, state, {
                    isFetching: false,
                    data: action.payload,
                    hasError: true,
                    errorMessage: action.err,
                });
        break;
        default:
            newState = {...state};
    }
    return newState;
}
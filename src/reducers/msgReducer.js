import { 
    PORTFOLIO_CREATE_REQUEST,
    PORTFOLIO_All_REQUEST,
    PORTFOLIO_DELETE_REQUEST,
    PORTFOLIO_VIEW_REQUEST,
    LANGUAGE_CREATE_REQUEST,

    MSG_COMMON_SUCCESS,
    MSG_COMMON_FAIL

} from '../actions/types';

const initialState = {
    success: false,
    msg: {},
    type: 'info'
};

export default function (state = initialState, action ) {
    switch (action.type) {
        case PORTFOLIO_CREATE_REQUEST:
            return {
                ...state,
                success: false,
            }
        case PORTFOLIO_All_REQUEST:
            return {
                ...state,
                success: false,
            }
        case PORTFOLIO_DELETE_REQUEST:
            return {
                ...state,
                success: false,
            }
        case PORTFOLIO_VIEW_REQUEST:
            return {
                ...state,
                success: false,
            }
        case LANGUAGE_CREATE_REQUEST:
            return {
                ...state,
                success: false
            }
        case MSG_COMMON_SUCCESS:
            return {
                ...state,
                msg: action.payload.msg,
                success: true
            }
        case MSG_COMMON_FAIL:
            return {
                ...state,
                msg: action.payload.msg,
                success: true
            }
         default:
              return state;
    }
}
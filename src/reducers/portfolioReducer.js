import { 
    PORTFOLIO_CREATE_REQUEST,
    PORTFOLIO_CREATE_SUCCESS,
    PORTFOLIO_All_REQUEST,
    PORTFOLIO_All_SUCCESS,
    PORTFOLIO_VIEW_REQUEST,
    PORTFOLIO_VIEW_SUCCESS,
    PORTFOLIO_DELETE_REQUEST,
    PORTFOLIO_DELETE_SUCCESS,
    PORTFOLIO_VIEW_DELETE,
    PORTFOLIO_EDIT_DELETE
} from './../actions/types';


const initialState = {
    project: {},
    projects: {},
    isLoading: false,
    success: false,
    isPhotoDelete: false,
    isRepeating: false,
};

export default function(state = initialState, action ) {
    switch ( action.type ){
        case PORTFOLIO_CREATE_REQUEST:
            return {
                ...state,
                success: false,
                isRepeating: false,
            }
        case PORTFOLIO_CREATE_SUCCESS:
            return {
                ...state,
                success: true,
                isLoading: true,
                isRepeating: true,
            }
        case PORTFOLIO_All_REQUEST:
            return {
                ...state,
                isLoading: true,
                isRepeating: false,
                isPhotoDelete: false
            }
        case PORTFOLIO_All_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isRepeating: false,
                isPhotoDelete: false,
                projects: action.payload
            }
        case PORTFOLIO_VIEW_REQUEST:
            return {
                ...state,
                success: false,
                isPhotoDelete: false
            }
        case PORTFOLIO_VIEW_SUCCESS:
            return {
                ...state,
                project: action.payload,
            }
        case PORTFOLIO_VIEW_DELETE:
            return {
                ...state,
                project: {},
            }
        case PORTFOLIO_DELETE_REQUEST:
            return {
                ...state,
                isRepeating: false,
                isPhotoDelete: false
            }
        case PORTFOLIO_DELETE_SUCCESS:
            return {
                ...state,
                isRepeating: true,
                isLoading: true,
                isPhotoDelete: false
            }
        case PORTFOLIO_EDIT_DELETE:
            return {
                ...state,
                isRepeating: true,
                isLoading: true,
                isPhotoDelete: true
            }
            
        
            
        default:
            return state;
    }
}
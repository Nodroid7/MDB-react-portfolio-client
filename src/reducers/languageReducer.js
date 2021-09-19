import { 
    LANGUAGE_CREATE_REQUEST,
    LANGUAGE_CREATE_SUCCESS,
    LANGUAGE_CURRENT_REQUEST,
    LANGUAGE_CURRENT_SUCCESS,
    LANGUAGE_VIEW_REQUEST,
    LANGUAGE_VIEW_SUCCESS,
    LANGUAGE_EDIT_SUCCESS,
    LANGUAGE_EDIT_REQUEST,
    LANGUAGE_DELETE_SUCCESS,
    LANGUAGE_DELETE_REQUEST
} from './../actions/types';


const initialState = {
    langs: {},
    lang: {},
    isLoading: false,
    isRepeating: false
};

export default function(state = initialState, action ) {
    switch ( action.type ){
        case LANGUAGE_CREATE_REQUEST:
            return {
                ...state,
                isRepeating: false,
            }
            
        case LANGUAGE_CREATE_SUCCESS:
            return {
                ...state,
                isRepeating: true
            }

        case LANGUAGE_EDIT_REQUEST:
            return {
                ...state,
                isRepeating: false,
            }
            
        case LANGUAGE_EDIT_SUCCESS:
            return {
                ...state,
                isRepeating: true
            }

        case LANGUAGE_DELETE_REQUEST:
            return {
                ...state,
                isRepeating: false,
            }
            
        case LANGUAGE_DELETE_SUCCESS:
            return {
                ...state,
                isRepeating: true
            }
        
        case LANGUAGE_CURRENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isRepeating: false,
            }

        case LANGUAGE_CURRENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isRepeating: false,
                langs: action.payload
            }
        
        case LANGUAGE_VIEW_REQUEST:

        case LANGUAGE_VIEW_SUCCESS:
            return {
                ...state,
                lang: action.payload
            }
            
        default:
            return state;
            
    }
}
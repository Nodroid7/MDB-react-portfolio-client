import { 
     USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCESS,
     USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
     USER_LOGOUT,
     SET_CURRENT_USER     
} from './../actions/types';


const initialState = {
     isAuthenticated: false,
     isLoading: false,
     user : {},
     error: {}
};

export default function (state = initialState, action ) {
     switch (action.type) {
          case USER_REGISTER_REQUEST:
          case USER_REGISTER_SUCCESS:
          case USER_LOGIN_REQUEST:
               return {
                    ...state,
                    isLoading: true
               }
          case USER_LOGIN_SUCCESS:
               return {
                    ...state,
                    isLoading: false,
                    user: action.payload,
                    isAuthenticated: true
               }
          case USER_LOGOUT:
               return {
                    ...initialState
               }
          case SET_CURRENT_USER:
               return {
                    ...state,
                    user: action.payload,
                    isAuthenticated: true
               }
          default:
               return state;
     }
}
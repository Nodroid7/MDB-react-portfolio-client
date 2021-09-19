import { 
     USER_REGISTER_FAIL,
     USER_LOGIN_FAIL,
     PORTFOLIO_CREATE_FAIL,
     PORTFOLIO_All_FAIL,
     PORTFOLIO_VIEW_FAIL,
     LANGUAGE_CREATE_FAIL,
     LANGUAGE_EDIT_FAIL    
} from '../actions/types';

const initialState = {};

export default function (state = initialState, action ) {
     switch (action.type) {
          case USER_REGISTER_FAIL:
              return action.payload;
              
          case USER_LOGIN_FAIL:
               return action.payload;

          case PORTFOLIO_CREATE_FAIL:
               return action.payload;

          case PORTFOLIO_All_FAIL:
               return action.payload;
          
          case PORTFOLIO_VIEW_FAIL:
               return action.payload;

          case LANGUAGE_CREATE_FAIL:
               return action.payload;

          case LANGUAGE_EDIT_FAIL:
               return action.payload;

          default:
               return state;
     }
}
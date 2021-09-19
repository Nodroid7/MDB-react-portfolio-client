import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import portfolioReducer from './portfolioReducer';
import msgReducer from './msgReducer';
import languageReducer from './languageReducer';
export default combineReducers({
     auth: authReducer,
     errors: errorReducer,
     portfolio: portfolioReducer,
     msg: msgReducer,
     lang: languageReducer
});
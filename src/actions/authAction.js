import axios from 'axios';

import {
     USER_REGISTER_REQUEST, 
     USER_REGISTER_SUCCESS,
     USER_REGISTER_FAIL,
     USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
     USER_LOGIN_FAIL,
     USER_LOGOUT,
     SET_CURRENT_USER
} from './types';

import { BACKEND_API_URL } from '../helper/config';
import { setAuthToken } from '../helper/utils';

// Register User

export const registerUser = (userData, history) => async dispatch => {
     try {
          dispatch({ type: USER_REGISTER_REQUEST });
          await axios.post(BACKEND_API_URL + 'auth/register', userData);
          dispatch({ type: USER_REGISTER_SUCCESS });
          return history.push('/login');
     } catch (error) {
          console.log(error);
          dispatch({ type: USER_REGISTER_FAIL, payload: error.response.data });
     }
}

// Login User

export const loginUser = (userData, history) => async dispatch => {
     try {
          dispatch({ type: USER_LOGIN_REQUEST });
          const result = await axios.post(BACKEND_API_URL + 'auth/login', userData);
          const { user, token } = result.data;
          setAuthToken(token, user.id);
          dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
          return history.push('/home');
     } catch (error) {
          console.log(error)
          dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data });
     }
}

// Logout User

export const logoutUser = () => dispatch => {
     setAuthToken(false, false);
     dispatch({ type: USER_LOGOUT });
}

// 

export const setCurrentUser = userData => {
     return {
       type: SET_CURRENT_USER,
       payload: userData
     };
   };
   

import axios from 'axios';

import {
     LANGUAGE_CURRENT_REQUEST,
     LANGUAGE_CURRENT_SUCCESS,
     LANGUAGE_CURRENT_FAIL,
     LANGUAGE_CREATE_REQUEST,
     LANGUAGE_CREATE_SUCCESS,
     LANGUAGE_CREATE_FAIL,
     LANGUAGE_VIEW_REQUEST,
     LANGUAGE_VIEW_SUCCESS,
     LANGUAGE_EDIT_REQUEST,
     LANGUAGE_EDIT_SUCCESS,
     LANGUAGE_EDIT_FAIL,
     LANGUAGE_DELETE_REQUEST,
     LANGUAGE_DELETE_SUCCESS,
     LANGUAGE_DELETE_FAIL,
// Message type
     MSG_COMMON_SUCCESS,
     MSG_COMMON_FAIL
} from './types';
import { BACKEND_API_URL } from '../helper/config';

// Add project in portfolio

export const addLanguage = (userData) => async dispatch => {
     try {
          dispatch({ type: LANGUAGE_CREATE_REQUEST });
          let result = await axios.post(BACKEND_API_URL + 'language/create', userData);
          if(result)
               dispatch({ type: MSG_COMMON_SUCCESS, payload: result.data });
               dispatch({ type: LANGUAGE_CREATE_SUCCESS });
     } catch (error) {
          console.log(error);
          dispatch({ type: LANGUAGE_CREATE_FAIL, payload: error.response.data });
          dispatch({ type: MSG_COMMON_FAIL, payload: {msg: {type: "error", content: "Error Creating Language"}} });
     }
}

// Current projects in portfolio

export const currentLanguage = () => async dispatch => {
     try {
          dispatch({ type: LANGUAGE_CURRENT_REQUEST });
          let result = await axios.get(BACKEND_API_URL + 'language');
          if(result)
               dispatch({ type: LANGUAGE_CURRENT_SUCCESS, payload: result.data.langs });
     } catch (error) {
          console.log(error);
          // dispatch({ type: LANGUAGE_CURRENT_FAIL, payload: error.response.msg });
     }
}

export const viewLanguage = (userData) => async dispatch => {
     try {
          dispatch({ type: LANGUAGE_VIEW_REQUEST });
          let result = await axios.get(BACKEND_API_URL + 'language' + userData);
          if(result)
               dispatch({ type: LANGUAGE_VIEW_SUCCESS, payload: result.data });
     } catch (error) {
          console.log(error);
          // dispatch({ type: LANGUAGE_CURRENT_FAIL, payload: error.response.msg });
     }
}

export const editLanguage = (userData) => async dispatch => {
     try {
          dispatch({ type: LANGUAGE_EDIT_REQUEST });
          let result = await axios.post(BACKEND_API_URL + 'language/edit', userData);
          if(result)
               dispatch({ type: MSG_COMMON_SUCCESS, payload: result.data });
               dispatch({ type: LANGUAGE_EDIT_SUCCESS });
     } catch (error) {
          console.log(error);
          dispatch({ type: LANGUAGE_EDIT_FAIL, payload: error.response.data });
          dispatch({ type: MSG_COMMON_FAIL, payload: {msg: {type: "error", content: "Error Editing Language"}} });
     }
}

export const deleteLanguage = (userData) => async dispatch => {
     try {
          dispatch({ type: LANGUAGE_DELETE_REQUEST });
          let result = await axios.delete(BACKEND_API_URL + `language/${userData}`);
          if(result)
               dispatch({ type: MSG_COMMON_SUCCESS, payload: result.data });
               dispatch({ type: LANGUAGE_DELETE_SUCCESS });
     } catch (error) {
          console.log(error);
          dispatch({ type: MSG_COMMON_FAIL, payload: {msg: {type: "error", content: "Error Editing Language"}} });
     }
}
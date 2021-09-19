import axios from 'axios';

import {
    PORTFOLIO_CREATE_REQUEST,
    PORTFOLIO_CREATE_SUCCESS,
    PORTFOLIO_CREATE_FAIL,
    PORTFOLIO_All_REQUEST,
    PORTFOLIO_All_SUCCESS,
    PORTFOLIO_All_FAIL,
    PORTFOLIO_DELETE_REQUEST,
    PORTFOLIO_DELETE_SUCCESS,
    PORTFOLIO_EDIT_DELETE,
    PORTFOLIO_VIEW_REQUEST,
    PORTFOLIO_VIEW_SUCCESS,
    PORTFOLIO_VIEW_DELETE,
     // Message type
     MSG_COMMON_SUCCESS,
     MSG_COMMON_FAIL,
} from './types';
import { BACKEND_API_URL } from '../helper/config';

// Add project in portfolio

export const addProject = (userData) => async dispatch => {
     try {
          dispatch({ type: PORTFOLIO_CREATE_REQUEST });
          let result = await axios.post(BACKEND_API_URL + 'portfolio/create', userData);
          if(result){
               dispatch({ type: MSG_COMMON_SUCCESS, payload: result.data });
               dispatch({ type: PORTFOLIO_CREATE_SUCCESS });
          }
     } catch (error) {
          console.log('error');
          console.log(error);
          dispatch({ type: PORTFOLIO_CREATE_FAIL, payload: error.response.data });
          dispatch({ type: MSG_COMMON_FAIL, payload: {msg: {type: "error", content: "Failed creating new project"}} });
     }
}

// Current projects in portfolio

export const allProjects = () => async dispatch => {
     try {
          dispatch({ type: PORTFOLIO_All_REQUEST });
          let result = await axios.get(BACKEND_API_URL + 'portfolio/');
          console.log(result)
               dispatch({ type: PORTFOLIO_All_SUCCESS, payload: result.data.projects });
     } catch (error) {
          console.log(error);
          dispatch({ type: MSG_COMMON_FAIL, payload: {msg: {type: "error", content: "Failed loading the projects"}} });
     }
}

// Selected projects in portfolio

export const selectedProjects = (id) => async dispatch => {
     try {
          dispatch({ type: PORTFOLIO_All_REQUEST });
          let result = await axios.get(BACKEND_API_URL + `portfolio/selected/${id}`);
          console.log(result)
               dispatch({ type: PORTFOLIO_All_SUCCESS, payload: result.data.projects });
     } catch (error) {
          console.log(error);
          dispatch({ type: MSG_COMMON_FAIL, payload: {msg: {type: "error", content: "Failed loading the projects"}} });
     }
}

// Delete projects in portfolio

export const deleteProject = (id) => async dispatch => {
     try {
          dispatch({ type: PORTFOLIO_DELETE_REQUEST });
          let result = await axios.delete(BACKEND_API_URL + `portfolio/${id}`);
          if(result){
               dispatch({ type: MSG_COMMON_SUCCESS, payload: result.data });
               dispatch({ type: PORTFOLIO_DELETE_SUCCESS });
          }
     } catch (error) {
          console.log('error');
          console.log(error);
          dispatch({ type: MSG_COMMON_FAIL, payload: error.response.data });
     }
}

// Show selected project in portfolio

export const viewProject = (id) => async dispatch => {
     try {
          dispatch({ type: PORTFOLIO_VIEW_REQUEST });
          let result = await axios.get(BACKEND_API_URL + `portfolio/${id}`);
          if(result)
               dispatch({ type: PORTFOLIO_VIEW_SUCCESS, payload: result.data });
     } catch (error) {
          console.log(error);
          dispatch({ type: MSG_COMMON_FAIL, payload: error.response.data });
     }
}

// Show canceled project in portfolio

export const viewCancelProject = () => async dispatch => {
     dispatch({ type: PORTFOLIO_VIEW_DELETE });
}

export const deletePhoto = (useData) => async dispatch => {
     try {
          dispatch({ type: PORTFOLIO_DELETE_REQUEST });
          let result = await axios.post(BACKEND_API_URL + `portfolio/photo`, useData);
          if(result){
               dispatch({ type: MSG_COMMON_SUCCESS, payload: result.data });
               dispatch({ type: PORTFOLIO_EDIT_DELETE });
          }
     } catch (error) {
          console.log('error');
          console.log(error);
          dispatch({ type: MSG_COMMON_FAIL, payload: error.response.data });
     }
}

export const editProject = (userData) => async dispatch => {
     try {
          dispatch({ type: PORTFOLIO_CREATE_REQUEST });
          let result = await axios.post(BACKEND_API_URL + 'portfolio/edit', userData);
          if(result){
               dispatch({ type: MSG_COMMON_SUCCESS, payload: result.data });
               dispatch({ type: PORTFOLIO_CREATE_SUCCESS });
          }
     } catch (error) {
          console.log('error');
          console.log(error);
          dispatch({ type: PORTFOLIO_CREATE_FAIL, payload: error.response.data });
          dispatch({ type: MSG_COMMON_FAIL, payload: {msg: {type: "error", content: "Failed creating new project"}} });
     }
}

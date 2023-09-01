import { Environment } from "../../helper/Helper";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  REGISTER_USER_POPFLAG,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  PROFILE_DETAILS_REQUEST,
  PROFILE_DETAILS_SUCCESS,
  PROFILE_DETAILS_FAIL,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  SINGLE_USERS_REQUEST,
  SINGLE_USERS_SUCCESS,
  SCHEDULE_MEETING_REQUEST,
  SCHEDULE_MEETING_SUCCESS,
  SCHEDULE_MEETING_FAIL,
  GET_SCHEDULE_MEETING_REQUEST,
  GET_SCHEDULE_MEETING_SUCCESS,
  GET_SCHEDULE_MEETING_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  GET_MEETING_REQUEST,
  GET_MEETING_FAIL,
  GET_MEETING_SUCCESS
} from "../constants/userConstants";
import axios from "axios";

// Login
export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

    const { data } = await axios.post(
      `${Environment.BASE_URL}/login`,
      userData,
      config
    );


    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register
export const register = (userData) => async (dispatch) => {


  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`${Environment.BASE_URL}/register`, userData, {
      withCredentials: true
    });

    console.log(data);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const logoutAction = () => async (dispatch) => {
  try {
    await axios.get(`${Environment.BASE_URL}/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};


export const poupFlag = () => async (dispatch) => {
  dispatch({ type: REGISTER_USER_POPFLAG });
};





//GET USER PROFILE DETAILS ACTION
export const getUseProfilerDetails = () => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_DETAILS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

    const { data } = await axios.get(`${Environment.BASE_URL}/profile`, config);

    dispatch({ type: PROFILE_DETAILS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: PROFILE_DETAILS_FAIL, payload: error.response.data.message });
  }
};


//GET USER PROFILE UPDATE ACTION
export const profilerUpdateAction = (userData) => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_UPDATE_REQUEST });

    const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

    const { data } = await axios.put(`${Environment.BASE_URL}/profile/update`, userData, config);
    console.log(data);

    dispatch({ type: PROFILE_UPDATE_SUCCESS, payload: data.user });

  } catch (error) {
    dispatch({ type: PROFILE_UPDATE_FAIL, payload: error.response.data.message });
  }
};



//GET USER PROFILE DETAILS ACTION
export const getAllUserDetailsAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

    const { data } = await axios.get(`${Environment.BASE_URL}/get/alluser`, config);

    dispatch({ type: ALL_USERS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: ALL_USERS_FAIL, payload: error.response.data.message });
  }
};



export const getSingleUserDetailsAction = (userData) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_USERS_REQUEST });

    const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

    const { data } = await axios.get(`${Environment.BASE_URL}/get/single/user/${userData}`, config);

    dispatch({ type: SINGLE_USERS_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: SINGLE_USERS_REQUEST, payload: error.response.data.message });
  }
};



export const scheduleMeetingAction = (userData) => async (dispatch) => {

  console.log(userData);
  try {
    dispatch({ type: SCHEDULE_MEETING_REQUEST });

    const config = { withCredentials: true }

    const { data } = await axios.post(`${Environment.BASE_URL}/schedule/meeting`, userData, config);

    dispatch({ type: SCHEDULE_MEETING_SUCCESS, payload: data.user });

  } catch (error) {
    dispatch({
      type: SCHEDULE_MEETING_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const getUpComingMeetingAction = () => async (dispatch) => {

  try {
    dispatch({ type: GET_SCHEDULE_MEETING_REQUEST });

    const config = { withCredentials: true }

    const { data } = await axios.get(`${Environment.BASE_URL}/upcoming/meeting`, config);
   
    
    
    console.log("getUpComingMeetingAction",data);

    dispatch({ type: GET_SCHEDULE_MEETING_SUCCESS, payload: [] });

  } catch (error) {
    dispatch({
      type: GET_SCHEDULE_MEETING_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const getMeetingDetailsAction = () => async (dispatch) => {

  try {
    dispatch({ type: GET_MEETING_REQUEST });

    const config = { withCredentials: true }

    const { data } = await axios.get(`${Environment.BASE_URL}/meeting`, config);

    console.log("getMeetingDetailsAction",data);


    dispatch({ type: GET_MEETING_SUCCESS, payload: data.user });

  } catch (error) {
    dispatch({
      type: GET_MEETING_FAIL,
      payload: error.response.data.message,
    });
  }
};



export const updatePasswordAction = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } ,withCredentials:true};

    const { data } = await axios.put(
      `${Environment.BASE_URL}/password/update`,
      passwords,
      config
    );

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
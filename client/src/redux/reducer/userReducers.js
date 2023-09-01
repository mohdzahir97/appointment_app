import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_POPFLAG,
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
    SINGLE_USERS_FAIL,
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
    GET_MEETING_SUCCESS,
    GET_MEETING_FAIL,

} from "../constants/userConstants";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {

        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                popupflag: true
            };

        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };


        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };

        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case LOAD_USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };

        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        case REGISTER_USER_POPFLAG:
            return {
                ...state,
                loading: false,
                popupflag: true
            };

        default:
            return state;
    }
};






//GET USER PROFILE DETAILS REDUCER
export const userProfileDetailsReducer = (state = { user: {} }, action) => {




    switch (action.type) {
        case PROFILE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PROFILE_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case PROFILE_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};



export const userUpdateProfileDetailsReducer = (state = { user: {} }, action) => {


    switch (action.type) {
        case PROFILE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };

        case PROFILE_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};


export const getAllUserDetailsReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };

        case ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};


export const getSingleUserDetailsReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case SINGLE_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SINGLE_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };

        case SINGLE_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};


export const scheduleMeetingReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case SCHEDULE_MEETING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SCHEDULE_MEETING_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };

        case SCHEDULE_MEETING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};


export const getscheduleMeetingReducer = (state = { users: [] }, action) => {

    switch (action.type) {
        case GET_SCHEDULE_MEETING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_SCHEDULE_MEETING_SUCCESS:
            return {
                ...state,
                loading: false,
                premeeting: action.payload,
            };

        case GET_SCHEDULE_MEETING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};


export const getMeetingDetailsReducer = (state = { users: [] }, action) => {

    switch (action.type) {
        case GET_MEETING_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_MEETING_SUCCESS:
            return {
                ...state,
                loading: false,
                meeting: action.payload,
            };

        case GET_MEETING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};





export const updatePasswordReducer = (state = {}, action) => {
    switch (action.type) {

      case UPDATE_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          isAuthenticated:false,
        };
      case UPDATE_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated:true,
          popupflag:true,
          user: action.payload,
        };

      case UPDATE_PASSWORD_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated:false,
          error: action.payload,
        };
  

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
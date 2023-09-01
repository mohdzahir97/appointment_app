import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllUserDetailsReducer, getMeetingDetailsReducer, getSingleUserDetailsReducer, getscheduleMeetingReducer, scheduleMeetingReducer, updatePasswordReducer, userProfileDetailsReducer, userReducer, userUpdateProfileDetailsReducer } from "./reducer/userReducers";




const reducer = combineReducers({
  userReducer: userReducer,
  userProfileDetailsReducer: userProfileDetailsReducer,
  userUpdateProfileDetailsReducer: userUpdateProfileDetailsReducer,
  getAllUserDetailsReducer: getAllUserDetailsReducer,
  getSingleUserDetailsReducer: getSingleUserDetailsReducer,
  scheduleMeetingReducer: scheduleMeetingReducer,
  getscheduleMeetingReducer: getscheduleMeetingReducer,
  updatePasswordReducer: updatePasswordReducer,
  getMeetingDetailsReducer: getMeetingDetailsReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

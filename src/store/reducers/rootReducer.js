import { combineReducers } from "redux";
import ticketReducer from "./ticket";
import currentCourseReducer from "./currency"
import modalReducer from "./modal"



export default combineReducers({
  ticket: ticketReducer,
  currency: currentCourseReducer,
  modalWindow: modalReducer
});

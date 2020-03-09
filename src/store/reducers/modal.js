import {
    OPEN_MODAL_FORM,
    CLOSE_MODAL_FORM,
    OPEN_MODAL_SUCCESS,
    CLOSE_MODAL_SUCCESS
  } from "../actions/actionTypes";

  
  const initialState = {
    open: false, 
    isSuccess: false 
  };
  
  const modalReducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_MODAL_FORM:
        return {
          ...state,
          open:!state.open
        };
      case CLOSE_MODAL_FORM:
        return {
          ...state,
          open: false
        };
        case  OPEN_MODAL_SUCCESS:
        return {
          ...state,
          open: false,
          isSuccess:!state.isSuccess
        };
        case  CLOSE_MODAL_SUCCESS:
        return {
          ...state,
          isSuccess:false
        };
     
      default:
        return state;
    }
  };
  
  export default modalReducer;
  
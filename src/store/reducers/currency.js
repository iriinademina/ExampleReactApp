import {
  FETCH_COURSE_START,
  FETCH_COURSE_ERROR,
  FETCH_COURSE_SUCCESS,
  SELECT_VALUTE
} from "../actions/actionTypes";

const initialState = {
  currencies: [],
  error: null,
  activeCurrency : {
    valute: "",
    activeButton: 0
  }
};

const currentCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_START:
      return {
        ...state
      };
    case FETCH_COURSE_SUCCESS:
      return {
        ...state,
        currencies: action.currentCourse
      };
    case FETCH_COURSE_ERROR:
      return {
        ...state,
        error: action.error
      };
    case SELECT_VALUTE:
      return {
        ...state,
        activeCurrency: action.payload
      };
    default:
      return state;
  }
};

export default currentCourseReducer;

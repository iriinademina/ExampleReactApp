import { currencyAxios } from "../../axios/axios-config";

import {
  FETCH_COURSE_START,
  FETCH_COURSE_ERROR,
  FETCH_COURSE_SUCCESS,
  SELECT_VALUTE
} from "../actions/actionTypes";

export const fetchCurrentCourse = () => {
  return async dispatch => {
    dispatch(fetchCurrentCourseStart());
    try {
      const response = await currencyAxios.get();
      const currentCourse = [];

      currentCourse.push(
        {
          charCode: response.data.Valute.USD.CharCode,
          value: response.data.Valute.USD.Value
        },
        {
          charCode: response.data.Valute.EUR.CharCode,
          value: response.data.Valute.EUR.Value
        }
      );
      dispatch(fetchCurrentCourseSuccess(currentCourse));
    } catch (error) {
      dispatch(fetchCurrentCourseError(error));
    }
  };
};

export const fetchCurrentCourseStart = () => ({
  type: FETCH_COURSE_START
});

export const fetchCurrentCourseSuccess = currentCourse => ({
  type: FETCH_COURSE_SUCCESS,
  currentCourse
});

export const fetchCurrentCourseError = error => ({
  type: FETCH_COURSE_ERROR,
  error
});

export const finishCourse = payload => ({
  type: SELECT_VALUTE,
  payload
});


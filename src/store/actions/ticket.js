import { mainAxios } from "../../axios/axios-config";

import {
  FETCH_TICKETS_START,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_SUCCESS,
  FILTER_TRANSFERS,
  SET_CHECKBOX_VALUE
} from "../actions/actionTypes";

export const fetchTickets = () => {
  return async dispatch => {
    dispatch(fetchTicketsStart());
    try {
      const tickets = await mainAxios.get("/tickets.json");
      dispatch(fetchTicketsSuccess(tickets.data));
    } catch (error) {
      dispatch(fetchTicketsError(error));
    }
  };
};

export const fetchTicketsStart = () => ({
  type: FETCH_TICKETS_START
});

export const fetchTicketsSuccess = tickets => ({
  type: FETCH_TICKETS_SUCCESS,
  tickets
});

export const fetchTicketsError = error => ({
  type: FETCH_TICKETS_ERROR,
  error
});

export const filterTransfersAction = tickets => ({
  type: FILTER_TRANSFERS,
  tickets
});


export const setCheckboxValueAction = payload => ({
  type: SET_CHECKBOX_VALUE,
  payload
});

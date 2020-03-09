import {
  FETCH_TICKETS_START,
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_SUCCESS,
  FILTER_TRANSFERS,
  SET_CHECKBOX_VALUE
} from "../actions/actionTypes";

const initialState = {
  tickets: [],
  loading: true,
  error: null,
  filterTickets: [],
  values: {
    all: false,
    "0": true,
    "1": true,
    "2": true,
    "3": true
  }
};

const selectCheckboxes = (values, name, checked) => {
  return Object.keys(values).reduce((acc, curr) => {
    if (name === "all") {
      acc[curr] = checked;
      return acc;
    } else {
      if (curr === "all") {
        acc[curr] = false;
      } else if (curr === name) {
        acc[curr] = checked;
      } else {
        acc[curr] = values[curr];
      }
      return acc;
    }
  }, {});
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: action.tickets,
        filterTickets: action.tickets
      };
    case FETCH_TICKETS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FILTER_TRANSFERS:
      return {
        ...state,
        filterTickets: action.tickets
      };
    case SET_CHECKBOX_VALUE:
      const { checked, name } = action.payload;
      return {
        ...state,
        values: selectCheckboxes(state.values, name, checked)
      };

    default:
      return state;
  }
};

export default ticketReducer;

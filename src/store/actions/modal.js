import {
    OPEN_MODAL_FORM,
    CLOSE_MODAL_FORM,
    OPEN_MODAL_SUCCESS,
    CLOSE_MODAL_SUCCESS
  } from "../actions/actionTypes";

  export const openModalForm = () => ({
    type: OPEN_MODAL_FORM
  });
  
  export const closeModalForm = () => ({
    type: CLOSE_MODAL_FORM,
  });
  
  export const openSuccessModal = () => ({
    type: OPEN_MODAL_SUCCESS
  });

  export const closeSuccessModal = () => ({
    type: CLOSE_MODAL_SUCCESS
  });


import React from "react";
import Modal from "@material-ui/core/Modal";
import Form from "../../components/Form/Form";
import "./Modal.css";


const FormModal = ({onClose, onOpen, onSuccess}) => {
  
  return (
    <Modal 
      className = "Modal"
      disableAutoFocus= {true}
      open
    >  
        <Form onClose={onClose} onOpen={onOpen} onSuccess={onSuccess} />
    </Modal>
  );
};

export default FormModal;

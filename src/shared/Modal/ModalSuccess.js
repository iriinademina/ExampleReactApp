import React from "react";
import Modal from "@material-ui/core/Modal";
import "./Modal.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const SuccessModal = ({ onClose }) => {

  return (
    <Modal 
      className = "Modal"
      disableAutoFocus= {true}
      open
    >
      <div className="Container-success">
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          color="textSecondary"
        >
          SUCCESS
        </Typography>
        <Button onClick={onClose}>
          <CloseIcon color="secondary" fontSize="large" />
        </Button>
      </div>
    </Modal>
  );
};

export default SuccessModal;

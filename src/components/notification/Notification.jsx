import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

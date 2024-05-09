import React from "react";
import { message } from "antd";
const createToast = () => {
  return {
    open: ({ type = "info", content = "" }) => {
      message[type](content);
    },
  };
};
const showToast = createToast();
const Toast = (type, messageContent) => {
  // type:success,error,warning
  return showToast.open({
    type: type,
    content: messageContent,
  });
};

export default Toast;

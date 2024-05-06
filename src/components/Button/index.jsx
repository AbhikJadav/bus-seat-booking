import { Button } from "antd";
import classNames from "classnames";
import React from "react";
import style from "./CustomeButton.module.scss";

const CustomButton = ({
  variant = "",
  buttonText = "",
  buttonClassName = "",
  onClick = () => {},
  ...rest
}) => {
  // variant("primary,dashed,text,link")
  return (
    <Button
      type={variant}
      className={classNames(style.buttonMainContainer, {
        [buttonClassName]: !!buttonClassName,
      })}
      onClick={onClick}
      {...rest}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;

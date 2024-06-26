import { Menu } from "antd";
import React, { useState } from "react";
import { MenuArray } from "./HeaderConstant";
import style from "./Header.module.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleNavigation } from "../../../store/Action/ReservationAction";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.reservationReducer);
  const { navKey } = selector;
  const handeNaveClick = (value) => {
    const findActiveMenu = MenuArray.find(
      (element) => element.key === value.key
    );
    dispatch(handleNavigation(value?.key));
    navigate(findActiveMenu?.route);
  };
  return (
    <div className={style.navContainer}>
      <Menu
        defaultSelectedKeys={[navKey]}
        selectedKeys={[navKey]}
        mode="horizontal"
        theme="dark"
        items={MenuArray}
        onClick={handeNaveClick}
        activeKey={navKey}
      />
    </div>
  );
};

export default Header;

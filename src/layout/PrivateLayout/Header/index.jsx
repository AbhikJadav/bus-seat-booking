import { Button, Menu } from "antd";
import React, { useState } from "react";
import { MenuArray } from "./HeaderConstant";
import style from "./Header.module.scss";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("1");
  const handeNaveClick = (value) => {
    const findActiveMenu = MenuArray.find(
      (element) => element.key === value.key
    );
    setSelectedMenu(value?.key);
    navigate(findActiveMenu?.route)
  };
  return (
    <div className={style.navContainer}>
      <Menu
        defaultSelectedKeys={selectedMenu}
        mode="horizontal"
        theme="dark"
        items={MenuArray}
        onClick={handeNaveClick}
      />
    </div>
  );
};

export default Header;

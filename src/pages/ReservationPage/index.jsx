import React from "react";
import ComponentHeader from "../../components/ComponentHeader";
import style from "./Reservation.module.scss";
import { FrownTwoTone } from "@ant-design/icons";

const ReservationPage = () => {
  return (
    <div className={style.reservationContainer}>
      <ComponentHeader headerText={"ReservationPage"} />
      <div className={style.seatContainer}>
        <FrownTwoTone />
      </div>
    </div>
  );
};

export default ReservationPage;

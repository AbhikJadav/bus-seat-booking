import React from "react";
import style from "./SeatAvailable.module.scss";

const SeatAvailable = () => {
  return (
    <div className={style.availableContainer}>
      <div className={style.availablleSeatConatiner}>SEAT LEGEND</div>
      <div className={style.seatBoxWrapper}>
        <div className={style.seatRectWrapper} /> Available
      </div>
      <div className={style.seatBoxWrapper}>
        <div className={style.seatUnRectWrapper} /> Unavailable
      </div>
    </div>
  );
};

export default SeatAvailable;

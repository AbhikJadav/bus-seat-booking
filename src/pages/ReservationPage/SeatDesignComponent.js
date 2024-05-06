import React from "react";
import style from "./Reservation.module.scss";
import classNames from "classnames";

const SeatDesignComponent = ({
  filterData = [],
  checkSeatIsAvailble = () => {},
  checkSeatSelected = () => {},
  handleSeat = () => {},
}) => {
  return (
    <>
      {filterData?.map((element) => {
        return (
          <div
            className={classNames(style.seatDesignWrapper, {
              [style.disableSeatWrapper]: checkSeatIsAvailble(element),
              [style.selectedSeatWrapper]: checkSeatSelected(element),
            })}
            onClick={() => !checkSeatIsAvailble(element) && handleSeat(element)}
          >
            {element.seatNumber}
            <div className={style.seatSquare} />
          </div>
        );
      })}
    </>
  );
};

export default SeatDesignComponent;

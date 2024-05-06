import React from "react";
import style from "./Reservation.module.scss";

const SeatComponent = ({
  deskHeading = "",
  seatDataArray = [],
  handleSeat = () => {},
}) => {
  return (
    <div className={style.deskContainer}>
      <div className={style.deskHeadingConatiner}>{deskHeading}</div>
      <div className={style.deskWrapper}>
        <div className={style.seatWrapper}>
          <div className={style.doubleWraapper}>
            {seatDataArray
              .filter(
                (element, index) =>
                  index % 2 === 0 && element.category === "double"
              )
              .map((element) => {
                return (
                  <div
                    className={style.seatDesignWrapper}
                    onClick={() => handleSeat(element)}
                  >
                    {element.seatNumber}
                    <div className={style.seatSquare} />
                  </div>
                );
              })}
          </div>
          <div className={style.doubleWraapper}>
            {seatDataArray
              .filter(
                (element, index) =>
                  index % 2 !== 0 && element.category === "double"
              )
              .map((element) => {
                return (
                  <div
                    className={style.seatDesignWrapper}
                    onClick={() => handleSeat(element)}
                  >
                    {element.seatNumber}
                    <div className={style.seatSquare} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className={style.singleSeatWrapper}>
          {seatDataArray
            .filter((seat) => seat.category === "single")
            .map((element) => {
              const { seatNumber } = element;

              return (
                <div
                  className={style.seatDesignWrapper}
                  onClick={() => handleSeat(element)}
                >
                  {seatNumber}
                  <div className={style.seatSquare} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SeatComponent;

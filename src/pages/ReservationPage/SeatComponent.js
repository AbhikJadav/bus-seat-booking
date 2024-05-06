import React from "react";
import style from "./Reservation.module.scss";
import { useSelector } from "react-redux";
import classNames from "classnames";
import SeatDesignComponent from "./SeatDesignComponent";

const SeatComponent = ({
  deskHeading = "",
  seatDataArray = [],
  handleSeat = () => {},
}) => {
  const reservationSelector = useSelector((state) => state.reservationReducer);
  const { userData, seatData } = reservationSelector;
  const userSeatNumber =
    userData?.map((element) => element.seatNumber)[0] ||
    []?.map((ele) => ele) ||
    [];
  const checkSeatIsAvailble = (element) =>
    userSeatNumber.includes(element.seatNumber);

  const checkSeatSelected = (element) =>
    seatData.map((element) => element.seatNumber).includes(element.seatNumber);
  const commonProps = {
    checkSeatIsAvailble,
    checkSeatSelected,
    handleSeat,
  };
  return (
    <div className={style.deskContainer}>
      <div className={style.deskHeadingConatiner}>{deskHeading}</div>
      <div className={style.deskWrapper}>
        <div className={style.seatWrapper}>
          <div className={style.doubleWraapper}>
            <SeatDesignComponent
              filterData={seatDataArray.filter(
                (element, index) =>
                  index % 2 === 0 && element.category === "double"
              )}
              {...commonProps}
            />
          </div>
          <div className={style.doubleWraapper}>
            <SeatDesignComponent
              filterData={seatDataArray?.filter(
                (element, index) =>
                  index % 2 !== 0 && element.category === "double"
              )}
              {...commonProps}
            />
          </div>
        </div>
        <div className={style.singleSeatWrapper}>
          <SeatDesignComponent
            filterData={seatDataArray.filter(
              (seat) => seat.category === "single"
            )}
            {...commonProps}
          />
        </div>
      </div>
    </div>
  );
};

export default SeatComponent;

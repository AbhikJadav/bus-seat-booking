import React, { useState } from "react";
import ComponentHeader from "../../components/ComponentHeader";
import style from "./Reservation.module.scss";
import { FrownTwoTone } from "@ant-design/icons";
import CustomButton from "../../components/Button";
import { seatArray, singleSeatNumbers } from "./ReservationConstant";
import SeatComponent from "./SeatComponent";
import BookingDetails from "./BookingCard/BookingDetails";
import SeatAvailable from "./SeatAvailable/SeatAvailable";
import { useDispatch, useSelector } from "react-redux";
import { setSeatData } from "../../store/Action/ReservationAction";

const ReservationPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.reservationReducer);
  const { seatData: selectedSeatData } = selector;
  const handleSeat = (element) => {
    dispatch(setSeatData(element));
  };
  return (
    <div className={style.reservationContainer}>
      <ComponentHeader headerText={"ReservationPage"} />
      <div className={style.reserveWrapper}>
        <div className={style.seatContainer}>
          <div className={style.seatTextWrapper}>
            Click on an Available seat to proceed with your transaction
          </div>
          {seatArray.map((element) => {
            const { lowerDesk, upperDesk } = element;
            return (
              <div className={style.deskContainer}>
                <SeatComponent
                  deskHeading={"Lower Desk"}
                  seatDataArray={lowerDesk}
                  handleSeat={handleSeat}
                />
                <SeatComponent
                  deskHeading={"Upper Desk"}
                  seatDataArray={upperDesk}
                  handleSeat={handleSeat}
                />
              </div>
            );
          })}
        </div>
        {selectedSeatData.length ? (
          <BookingDetails selectedSeatData={selectedSeatData} />
        ) : (
          <SeatAvailable />
        )}
      </div>
    </div>
  );
};

export default ReservationPage;

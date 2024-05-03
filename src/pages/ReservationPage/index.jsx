import React from "react";
import ComponentHeader from "../../components/ComponentHeader";
import style from "./Reservation.module.scss";
import { FrownTwoTone } from "@ant-design/icons";
import CustomButton from "../../components/Button";
import { seatArray, singleSeatNumbers } from "./ReservationConstant";

const ReservationPage = () => {
  return (
    <div className={style.reservationContainer}>
      <ComponentHeader headerText={"ReservationPage"} />
      <div className={style.seatContainer}>
        {seatArray.map((element) => {
          const { lowerDesk, upperDesk } = element;
          return (
            <div className={style.deskContainer}>
              <div className={style.deskWrapper}>
                <div className={style.seatWrapper}>
                  <div className={style.doubleWraapper}>
                    {lowerDesk
                      .filter(
                        (element, index) =>
                          index % 2 === 0 && element.category === "double"
                      )
                      .map((element) => {
                        return (
                          <div className={style.seatDesignWrapper}>
                            {element.seatNumber}
                            <div className={style.seatSquare} />
                          </div>
                        );
                      })}
                  </div>
                  <div className={style.doubleWraapper}>
                    {lowerDesk
                      .filter(
                        (element, index) =>
                          index % 2 !== 0 && element.category === "double"
                      )
                      .map((element) => {
                        return (
                          <div className={style.seatDesignWrapper}>
                            {element.seatNumber}
                            <div className={style.seatSquare} />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className={style.singleSeatWrapper}>
                  {lowerDesk
                    .filter((seat) => seat.category === "single")
                    .map((element) => {
                      const { seatNumber } = element;

                      return (
                        <div className={style.seatDesignWrapper}>
                          {seatNumber}
                          <div className={style.seatSquare} />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className={style.deskWrapper}>
                <div className={style.seatWrapper}>
                  <div className={style.doubleWraapper}>
                    {upperDesk
                      .filter(
                        (element, index) =>
                          index % 2 === 0 && element.category === "double"
                      )
                      .map((element) => {
                        return (
                          <div className={style.seatDesignWrapper}>
                            {element.seatNumber}
                            <div className={style.seatSquare} />
                          </div>
                        );
                      })}
                  </div>
                  <div className={style.doubleWraapper}>
                    {upperDesk
                      .filter(
                        (element, index) =>
                          index % 2 !== 0 && element.category === "double"
                      )
                      .map((element) => {
                        return (
                          <div className={style.seatDesignWrapper}>
                            {element.seatNumber}
                            <div className={style.seatSquare} />
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className={style.singleSeatWrapper}>
                  {upperDesk
                    .filter((seat) => seat.category === "single")
                    .map((element) => {
                      const { seatNumber } = element;

                      return (
                        <div className={style.seatDesignWrapper}>
                          {seatNumber}
                          <div className={style.seatSquare} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReservationPage;

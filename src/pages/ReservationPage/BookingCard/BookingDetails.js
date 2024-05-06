import React, { useEffect, useState } from "react";
import style from "./Booking.module.scss";
import CustomButton from "../../../components/Button";
import BookingModal from "../BookingModal/BookingModal";
import { useSelector } from "react-redux";
const BookingDetails = ({ selectedSeatData = [] }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const reservationSelector = useSelector((state) => state.reservationReducer);
  const { seatData = [] } = reservationSelector;

  const price = 500;
  const handleModal = (value) => {
    setIsOpenModal(value);
  };
  const initialUserObj = {
    firstName: "",
    lastName: "",
    email: "",
    seatNumber: [],
    dateOfBooking: "",
  };
  const [userObj, setUserObj] = useState(initialUserObj);
  useEffect(() => {
    const seatUpdatedData = seatData.map((element) => element.seatNumber) || [];

    setUserObj({ ...userObj, seatNumber: seatUpdatedData });
  }, [seatData, isOpenModal]);
  return (
    <div className={style.bookingDetailContainer}>
      <div className={style.bookingHeadingWrapper}>Booking Detail</div>
      <div className={style.seatDetails}>
        <div className={style.seatText}>Seat No:</div>
        <div className={style.seatNoWrapper}>
          {selectedSeatData.map((element) => element.seatNumber).join(", ")}
        </div>
      </div>
      <div className={style.priceDetails}>
        <div className={style.seatText}>Total Price:</div>
        <div className={style.seatNoWrapper}>
          {price * selectedSeatData.length}
        </div>
      </div>
      <div>
        <CustomButton
          variant={"primary"}
          buttonText="PROCEED TO BOOK"
          buttonClassName={style.proceesBtnContainer}
          onClick={() => handleModal(true)}
        />
      </div>
      {isOpenModal ? (
        <BookingModal
          isOpenModal={isOpenModal}
          handleModal={handleModal}
          userObj={userObj}
          setUserObj={setUserObj}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BookingDetails;

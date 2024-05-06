import React, { useState } from "react";
import style from "./Booking.module.scss";
import CustomButton from "../../../components/Button";
import BookingModal from "../BookingModal/BookingModal";
const BookingDetails = ({ selectedSeatData = [] }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const price = 500;
  const handleModal = (value) => {
    setIsOpenModal(value);
  };
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
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BookingDetails;

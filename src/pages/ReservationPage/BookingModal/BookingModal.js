import { Button, DatePicker, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import CustomButton from "../../../components/Button";
import CustomInputField from "../../../components/CustomInputField";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../store/Action/ReservationAction";

const BookingModal = ({ isOpenModal = false, handleModal = () => {} }) => {
  const dispatch = useDispatch();
  const reservationSelector = useSelector((state) => state.reservationReducer);
  const { seatData = [], userData = [] } = reservationSelector;
  const [form] = Form.useForm();

  const initialUserObj = {
    firstName: "",
    lastName: "",
    email: "",
    seatNumber: "",
    dateOfBooking: "",
  };
  const [userObj, setUserObj] = useState(initialUserObj);
  const handleFormOnChange = (event) => {
    const { name, value } = event.target;
    setUserObj((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleDateOnChange = (date, dateString) => {
    setUserObj({ ...userObj, dateOfBooking: date });
  };
  const {
    firstName = "",
    lastName = "",
    email = "",
    seatNumber = "",
    dateOfBooking = "",
  } = userObj;

  const handleSaveClick = () => {
    // if (form.validateFields()) {
    dispatch(setUserData(userObj));
    // }
  };
  console.log(
    "reservationSelector",
    reservationSelector,
    seatData.map((element) => element.seatNumber)
  );
  return (
    <Modal
      title="Bookin Details"
      open={isOpenModal}
      onCancel={() => handleModal(false)}
      footer={[
        <CustomButton buttonText="Cancel" htmlType="submit" />,
        <CustomButton
          variant={"primary"}
          buttonText="Save"
          htmlType="submit"
          onClick={handleSaveClick}
        />,
      ]}
    >
      <div>
        <Form
          name="basic"
          // labelCol={{
          //   span: 8,
          // }}
          // wrapperCol={{
          //   span: 16,
          // }}
          // style={{
          // }}
          initialValues={{
            remember: true,
          }}
          form={form}
        >
          {/* <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item> */}
          <CustomInputField
            label="First Name"
            name="firstName"
            value={firstName}
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
            onChange={handleFormOnChange}
          />

          <CustomInputField
            label="Last Name"
            name="lastName"
            value={lastName}
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
            onChange={handleFormOnChange}
          />

          <CustomInputField
            label="Email"
            name="email"
            value={email}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
            onChange={handleFormOnChange}
          />
          <CustomInputField
            label="Seat Number"
            name="seatNumber"
            value={seatNumber}
            defaultValue={seatData.map((element) => element.seatNumber)}
            rules={[
              {
                required: true,
                message: "Please input your seat number!",
              },
            ]}
            onChange={handleFormOnChange}
          />

          <Form.Item
            label="Booking Date"
            name="dateOfBooking"
            rules={[
              {
                required: true,
                message: "Please input your booking date!",
              },
            ]}
          >
            <DatePicker
              name="dateOfBooking"
              format="DD-MM-YYYY"
              value={dateOfBooking}
              onChange={handleDateOnChange}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default BookingModal;

import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import CustomButton from "../../../components/Button";
import CustomInputField from "../../../components/CustomInputField";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserData,
  updateUserData,
} from "../../../store/Action/ReservationAction";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const BookingModal = ({
  isOpenModal = false,
  handleModal = () => {},
  userObj = {},
  setUserObj = () => {},
  isEdit = false,
}) => {
  console.log("userObj", userObj);

  const dispatch = useDispatch();
  const [form] = Form.useForm();

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
    setUserObj({ ...userObj, dateOfBooking: dateString });
  };
  const onFinish = (value) => {
    console.log("value", value);
  };
  const {
    firstName = "",
    lastName = "",
    email = "",
    seatNumber = "",
    dateOfBooking = "",
  } = userObj;
  const handleSaveClick = async () => {
    if (isEdit) {
      dispatch(updateUserData(userObj));
      handleModal(false);
    } else {
      try {
        await form.validateFields();
        dispatch(setUserData({ ...userObj, id: uuid() }));
        handleModal(false);
      } catch (error) {
        console.error("Form validation failed:", error);
      }
    }
  };
  return (
    <Modal
      title="Bookin Details"
      open={isOpenModal}
      onCancel={() => handleModal(false)}
      footer={[
        <CustomButton
          buttonText="Cancel"
          htmlType="submit"
          onClick={() => handleModal(false)}
        />,
        <CustomButton
          variant={"primary"}
          buttonText={isEdit ? "Update" : "Save"}
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
          onFinish={onFinish}
        >
          <CustomInputField
            label="First Name"
            name="firstName"
            value={firstName}
            defaultValue={firstName}
            placeholder="Enter First Name"
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
            defaultValue={lastName}
            placeholder="Enter Last Name"
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
            defaultValue={email}
            placeholder="Enter Email Address"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please input a valid email!",
              },
            ]}
            onChange={handleFormOnChange}
          />

          <Form.Item label={"Seat Number"} name={"seatNumber"}>
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              defaultValue={seatNumber}
              disabled={true}
            />
          </Form.Item>
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
              placeholder="Enter Booking Date"
              defaultValue={
                dateOfBooking ? dayjs(dateOfBooking, "DD-MM-YYYY") : ""
              }
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default BookingModal;

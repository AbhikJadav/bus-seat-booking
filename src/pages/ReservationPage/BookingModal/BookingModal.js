import { DatePicker, Form, Modal, Select } from "antd";
import React from "react";
import CustomButton from "../../../components/Button";
import CustomInputField from "../../../components/CustomInputField";
import { useDispatch, useSelector } from "react-redux";
import {
  handleNavigation,
  setUserData,
  updateUserData,
} from "../../../store/Action/ReservationAction";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import Toast from "../../../components/ToastComponent";

const BookingModal = ({
  isOpenModal = false,
  handleModal = () => {},
  userObj = {},
  setUserObj = () => {},
  isEdit = false,
  initialUserObj = {},
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const reservationSelector = useSelector((state) => state.reservationReducer);
  const { userData } = reservationSelector;
  console.log("userData", userData);

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
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };
  const {
    firstName = "",
    lastName = "",
    email = "",
    seatNumber = "",
    dateOfBooking = "",
  } = userObj;
  const handleSaveClick = async () => {
    const findUserData = userData.find(
      (element) => element.email === userObj.email
    );
    if (isEdit) {
      dispatch(updateUserData(userObj));
      handleModal(false);
      setUserObj(initialUserObj);
      Toast("success", "Edit passenger successfully.");
    } else {
      if (findUserData) {
        return Toast(
          "error",
          `The user with ${findUserData.email} is already exists!!`
        );
      } else {
        try {
          await form.validateFields();
          dispatch(setUserData({ ...userObj, id: uuid() }));
          dispatch(handleNavigation("1"));
          handleModal(false);
          navigate("/");
          setUserObj(initialUserObj);
          Toast("success", "Added passenger successfully.");
        } catch (error) {
          error?.errorFields?.map((element) => {
            return element?.errors?.map((nm) => {
              return Toast("error", nm);
            });
          });
        }
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
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 20,
          }}
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
            label="Booking Date:"
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
              disabledDate={disabledDate}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default BookingModal;

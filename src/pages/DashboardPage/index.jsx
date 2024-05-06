import { Space, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData } from "../../store/Action/ReservationAction";
import BookingModal from "../ReservationPage/BookingModal/BookingModal";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import styles from "./dashboard.module.scss";
import TablePagination from "./TablePagination";

const DashboardPage = () => {
  const reservationSelector = useSelector((state) => state.reservationReducer);
  const { userData = [] } = reservationSelector;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const handleModal = (value) => {
    if (!value) {
      setUserObj(initialUserObj);
    }
    setIsOpenModal(value);
    setIsEdit(false);
  };
  const dispatch = useDispatch();
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Seat Number",
      dataIndex: "seatNumber",
      key: "seatNumber",
    },
    {
      title: "Booking Date",
      dataIndex: "dateOfBooking",
      key: "dateOfBooking",
    },
    {
      title: "Action",
      key: "action",
      render: (rowData) => (
        <Space size="middle">
          <div
            onClick={() => handleDeleteClick(rowData)}
            className={styles.deleteWraapper}
          >
            <DeleteFilled />
          </div>
          <div
            onClick={() => handleEditClick(rowData)}
            className={styles.editWraapper}
          >
            <EditFilled />
          </div>
        </Space>
      ),
    },
  ];
  const initialUserObj = {
    firstName: "",
    lastName: "",
    email: "",
    seatNumber: [],
    dateOfBooking: "",
  };
  const [userObj, setUserObj] = useState(initialUserObj);
  const handleDeleteClick = (rowData) => {
    dispatch(deleteUserData(rowData.id));
  };
  const handleEditClick = (rowData) => {
    setUserObj(rowData);
    handleModal(true);
    setIsEdit(true);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };
  const paginateData = userData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return (
    <div>
      <Table columns={columns} dataSource={paginateData} pagination={false} />
      {paginateData.length > 10 && (
        <TablePagination
          data={userData}
          currentPage={currentPage}
          pageSize={pageSize}
          handlePageChange={handlePageChange}
        />
      )}
      {isOpenModal ? (
        <BookingModal
          isOpenModal={isOpenModal}
          handleModal={handleModal}
          userObj={userObj}
          setUserObj={setUserObj}
          isEdit={isEdit}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DashboardPage;

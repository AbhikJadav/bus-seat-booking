import { Pagination } from "antd";
import React, { useState } from "react";

const TablePagination = ({
  data = [],
  currentPage = 1,
  pageSize,
  handlePageChange = () => {},
}) => {
  return (
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={data.length}
      onChange={handlePageChange}
      showSizeChanger
      pageSizeOptions={["5", "10", "20", "50"]}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
    />
  );
};

export default TablePagination;

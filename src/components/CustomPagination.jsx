import { Pagination, Space } from "antd";
import React from "react";

const CustomPagination = () => {
  return (
    <>
      <Space direction="vertical" size={8}>
        <Pagination total={20} pageSize={5} />
        <Pagination total={20} pageSize={5} defaultCurrent={2} />
        <Pagination total={150} pageSize={5} defaultCurrent={4} />
        <Pagination total={150} showSizeChanger defaultCurrent={4} />
        <Pagination
          total={150}
          showSizeChanger
          pageSizeOptions={[5, 10, 20, 25, 30, 40]}
          defaultCurrent={4}
        />
        <Pagination
          total={150}
          showSizeChanger
          showQuickJumper
          defaultCurrent={4}
        />
        <Pagination simple total={150} pageSize={5} defaultCurrent={2} />
        <Pagination
          total={150}
          pageSize={5}
          itemRender={(page, type) => {
            if (type === "next") {
              return <p>Next</p>;
            } else if (type === "prev") {
              return <p>Previous</p>;
            } else if (type === "page") {
              return <p>Page#{page}</p>;
            }
          }}
        />
      </Space>
    </>
  );
};

export default CustomPagination;

import React, { useEffect, useState } from "react";
import { Spin, Table } from "antd";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",

      // Method for sorting the record by userId
      sorter: (record1, record2) => {
        return record1.userId > record2.userId;
      },
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Completed" : "In Progress"}</p>;
      },

      // Method for handling record by status
      filters: [
        { text: "completed", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];
  return (
    <div>
      {loading ? (
        <Spin />
      ) : (
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: pageSize,
            onChange: (current, pageSize) => {
              setPageSize(pageSize);
            },
          }}
        />
      )}
    </div>
  );
};

export default Pagination;

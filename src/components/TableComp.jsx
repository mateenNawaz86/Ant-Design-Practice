import { Table } from "antd";
import React from "react";

const TableComp = () => {
  const data = [
    {
      id: 1,
      name: "Aamir",
      age: 35,
      status: "Married",
    },
    {
      id: 2,
      name: "Wasim",
      age: 25,
      status: "Single",
    },
    {
      id: 3,
      name: "Mateen",
      age: 21,
      status: "Single",
    },
    {
      id: 4,
      name: "Aftab",
      age: 15,
      status: "Single",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "id",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "id",
    },
    {
      title: "Graduted",
      key: "id",
      render: (payload) => {
        return payload.age > 20 ? "True" : "False";
      },
    },
  ];
  return (
    <>
      <Table className="block" dataSource={data} columns={columns}></Table>
    </>
  );
};

export default TableComp;

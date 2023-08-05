import { Table } from "antd";
import React from "react";

const ExpendedTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  const dataSource = [];
  for (let index = 0; index < 7; index++) {
    dataSource.push({
      key: index,
      name: "Name " + index,
      age: index,
      address: "Address " + index,
      description: "Description " + index,
    });
  }
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        className="w-1/2"
        expandable={{
          rowExpandable: (record) => true,
          expandedRowRender: (record) => {
            if (record.age === 4) {
              return <Table columns={columns} dataSource={dataSource} />;
            }
            return <p>{record.description}</p>;
          },
        }}
      />
    </>
  );
};

export default ExpendedTable;

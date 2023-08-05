import React, { useState } from "react";
import { Input, Table } from "antd";

const GlobalSearch = () => {
  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return String(record.name).toLowerCase().includes(value.toLowerCase());
      },
    },

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
  const dataSource = [
    {
      key: 1,
      name: "A Name",
      age: 10,
      address: "A address",
    },
    {
      key: 2,
      name: "B Name",
      age: 20,
      address: "B address",
    },
    {
      key: 3,
      name: "C Name",
      age: 30,
      address: "C address",
    },
  ];
  return (
    <>
      <Input.Search
        placeholder="Search here..."
        style={{ marginBottom: 8, width: "325px" }}
        onSearch={(value) => {
          setSearchText(value);
        }}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default GlobalSearch;

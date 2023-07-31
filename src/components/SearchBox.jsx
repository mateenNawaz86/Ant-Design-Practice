import React, { useState } from "react";
import { Input, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBox = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Mateen",
      age: 21,
      address: "Islamabad, PK",
    },
    {
      key: "2",
      name: "Waseem",
      age: 25,
      address: "Lahore, PK",
    },
    {
      key: "3",
      name: "Aftab",
      age: 15,
      address: "Layyah, PK",
    },
    {
      key: "4",
      name: "Aamir",
      age: 35,
      address: "Layyah, PK",
    },
  ]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder="Enter text here..."
            // method for able to getting the inputed value
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          />
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder="Enter text here..."
            // method for able to getting the inputed value
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          />
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      // filter the value even we enter the lowercase
      onFilter: (value, record) => {
        return record.address.toLowerCase().includes(value.toLowerCase());
      },
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default SearchBox;

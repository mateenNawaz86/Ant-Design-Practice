import React, { useState } from "react";
import { Select, Space, Switch, Table } from "antd";

const GlobalSorting = () => {
  const [ascedingSort, setAscedingSort] = useState(true);
  const [dataSource, setDataSource] = useState([
    {
      name: "Mateen",
      age: 21,
    },
    {
      name: "Waseem",
      age: 26,
    },
    {
      name: "Aftab",
      age: 14,
    },
  ]);
  const column = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
  ];

  const sorterHandler = (selectedValue) => {
    const sortedDataSource = [...dataSource];

    if (selectedValue === "name") {
      sortedDataSource.sort((a, b) =>
        a.name > b.name ? 1 : a.name === b.name ? 0 : -1
      );
    } else if (selectedValue.age === "age") {
      sortedDataSource.sort((a, b) => a.age - b.age);
    }

    setDataSource(sortedDataSource);
  };

  //   variable for handle the sorting by switch
  const updatedDataSource = ascedingSort
    ? [...dataSource]
    : [...dataSource].reverse();

  return (
    <>
      <Space
        style={{
          marginBottom: 10,
        }}
      >
        <Select placeholder="Select for Sorting" onChange={sorterHandler}>
          <Select.Option value="name">Name</Select.Option>
          <Select.Option value="age">Age</Select.Option>
        </Select>
        <Switch
          checkedChildren="Asc"
          unCheckedChildren="Desc"
          defaultChecked={ascedingSort}
          onChange={setAscedingSort}
        />
      </Space>
      <Table columns={column} dataSource={updatedDataSource} />
    </>
  );
};

export default GlobalSorting;

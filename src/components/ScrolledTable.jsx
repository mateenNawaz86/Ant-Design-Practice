import { Table } from "antd";
import React from "react";

const ScrolledTable = () => {
  const columns = [];
  const dataSource = [];

  const numberOfColumns = 18;
  const numberOfRows = 18;

  for (let index = 0; index < numberOfColumns; index++) {
    columns.push({
      title: `col ${index + 1}`,
      dataIndex: `col_${index + 1}`,
      fixed:
        index < 2 ? "left" : index === numberOfColumns - 1 ? "right" : null,
    });
  }

  for (let index = 0; index < numberOfRows; index++) {
    const rowData = {};
    for (let colIndex = 0; colIndex < numberOfColumns; colIndex++) {
      rowData[`col_${colIndex + 1}`] = `R${index + 1}C${colIndex + 1}`;
    }
    dataSource.push(rowData);
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        style={{
          maxWidth: "500px",
          scrollBehavior: "smooth",
        }}
        scroll={{ x: true, y: 400 }}
      />
    </>
  );
};

export default ScrolledTable;

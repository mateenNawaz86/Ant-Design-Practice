import React, { useState } from "react";
import { Table, Tag } from "antd";

const SelectionTable = () => {
  const [selected, setSelected] = useState(["3"]);

  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "green"
          : tag.includes("B")
          ? "blue"
          : "orange";
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Mateen Nawaz",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Wasim Nawaz",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Aftab Nawaz",
      grade: "B+",
    },
    {
      key: "4",
      id: 4,
      name: "Aamir Nawaz",
      grade: "B",
    },
    {
      key: "5",
      id: 5,
      name: "Awais Khan",
      grade: "C",
    },
  ];
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: selected,

          //   method for changing the selection
          onChange: (keys) => {
            setSelected(keys);
          },

          //   Method for showing the selected the rows
          onSelect: (keys) => {
            console.log(keys);
          },

          //   Method for able or disable the rows dynamically
          getCheckboxProps: (keys) => ({
            disabled: keys.grade === "C",
          }),

          //   Method for select the rows with dynamic command
          selections: [
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,

            // Custom method for showing the even records
            {
              key: "even",
              text: "Select Even Rows",
              onSelect: (keys) => {
                const selectedRow = keys.filter((item) => {
                  return item % 2 === 0;
                });
                setSelected(selectedRow);
              },
            },

            // custom method for showing the excellen grade records
            {
              key: "excellent",
              text: "Select Students who's grade are excellent",
              onSelect: (allKeys) => {
                const seletedKeys = allKeys.filter((item) => {
                  const isExcellent = dataSource.find((student) => {
                    return student.key === item && student.grade.includes("A");
                  });
                  return isExcellent;
                });
                setSelected(seletedKeys);
              },
            },

            // custom method for showing the Good grade records
            {
              key: "good",
              text: "Select Students who's grade are Good",
              onSelect: (allKeys) => {
                const seletedKeys = allKeys.filter((item) => {
                  const isExcellent = dataSource.find((student) => {
                    return student.key === item && student.grade.includes("B");
                  });
                  return isExcellent;
                });
                setSelected(seletedKeys);
              },
            },
          ],
        }}
      />
    </>
  );
};

export default SelectionTable;

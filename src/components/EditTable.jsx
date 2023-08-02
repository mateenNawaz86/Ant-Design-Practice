import React, { useEffect, useState } from "react";
import { Button, Form, Input, Table } from "antd";

const EditTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 5; index++) {
      data.push({
        key: `${index}`,
        name: `Name ${index}`,
        address: `Address ${index}`,
      });
    }
    setDataSource(data);
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        if (isEditing === record.key) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      // Method for editing the record
      render: (text, record) => {
        if (isEditing === record.key) {
          return (
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please enter your address",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <div className="space-x-2">
            <Button
              type="primary"
              shape="round"
              className="bg-blue-400"
              onClick={() => {
                setIsEditing(record.key);
                form.getFieldValue({
                  name: record.name,
                  address: record.address,
                });
              }}
            >
              Edit
            </Button>
            <Button
              htmlType="submit"
              type="primary"
              shape="round"
              className="bg-blue-400"
            >
              Save
            </Button>
          </div>
        );
      },
    },
  ];

  // Function for handling the update values
  const submitHandler = (value) => {
    // Create a copy of the current dataSource array
    const updatedValues = [...dataSource];

    // Find the index of the item being edited (isEditing) in the dataSource array
    // and replace it with the updated value provided as an argument to the function
    updatedValues.splice(isEditing, 1, { ...value, key: isEditing });

    // Update the dataSource state with the updatedValues array
    setDataSource(updatedValues);

    // Clear the isEditing state to exit the edit mode
    setIsEditing(null);
  };
  return (
    <Form form={form} onFinish={submitHandler}>
      <Table columns={columns} dataSource={dataSource} />
    </Form>
  );
};

export default EditTable;

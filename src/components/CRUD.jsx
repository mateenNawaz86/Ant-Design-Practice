import React, { useState } from "react";
import { Button, Form, Input, Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const CRUD = () => {
  const [data, setData] = useState([]);
  const [editRecord, setEditRecord] = useState(null);

  const [enteredInp, setEnteredInp] = useState({
    name: "",
    email: "",
    address: "",
  });

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Address",
      dataIndex: "address",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              style={{
                color: "blue",
                marginRight: "10px",
                cursor: "pointer",
                fontSize: "18px",
              }}
              onClick={() => onEditHandler(record)}
            />
            <DeleteOutlined
              onClick={() => onDeleteHandler(record)}
              style={{
                color: "red",
                cursor: "pointer",
                fontSize: "18px",
              }}
            />
          </>
        );
      },
    },
  ];

  // Function for handling the delete functionality
  const onDeleteHandler = (item) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setData((prev) => {
          return prev.filter((student) => student.id !== item.id);
        });
      },
    });
  };

  // Function for handling the edit functionality
  const onEditHandler = (item) => {
    // Set the record data to the state variable for editing
    setEditRecord(item);
    // Pre-fill the form fields with the record data
    setEnteredInp({
      name: item.name,
      email: item.email,
      address: item.address,
    });
  };

  const changeInpHandler = (event) => {
    setEnteredInp({
      ...enteredInp,
      [event.target.name]: event.target.value,
    });
  };

  // Function for Handling the submit functionality
  const handleSubmit = () => {
    if (editRecord) {
      // If there's an editRecord, update the existing record
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editRecord.id ? { ...item, ...enteredInp } : item
        )
      );
      setEditRecord(null); // Reset the editRecord after updating
    } else {
      // If there's no editRecord, add a new record
      const randomNumber = parseInt(Math.random() * 1000);
      const id = randomNumber;
      const newRecord = { ...enteredInp, id, key: id };
      setData([...data, newRecord]);
    }

    setEnteredInp({ name: "", email: "", address: "" });
  };

  const isFormValid = Object.values(enteredInp).every(
    (value) => value.trim() !== ""
  );

  return (
    <>
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          labelCol={{ span: 24 }} // Use the full width for the label
        >
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name.."
            value={enteredInp.name}
            onChange={changeInpHandler}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          labelCol={{ span: 24 }} // Use the full width for the label
        >
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Email.."
            value={enteredInp.email}
            onChange={changeInpHandler}
          />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          labelCol={{ span: 24 }} // Use the full width for the label
        >
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="Address.."
            value={enteredInp.address}
            onChange={changeInpHandler}
          />
        </Form.Item>

        <Form.Item>
          <Button
            disabled={!isFormValid}
            htmlType="submit"
            type="primary"
            className="bg-blue-400"
          >
            {editRecord ? "Update Student" : "Add Student"}
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CRUD;

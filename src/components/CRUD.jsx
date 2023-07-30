import React, { useState } from "react";
import { Button, Form, Input, Table } from "antd";

const CRUD = () => {
  const [data, setData] = useState([]);
  const [enteredInp, setEnteredInp] = useState({
    name: "",
    email: "",
    address: "",
  });

  const columns = [
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
  ];

  const changeInpHandler = (event) => {
    setEnteredInp({
      ...enteredInp,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    setData([...data, { ...enteredInp, key: data.length }]); // Add 'key' field with the index as the unique key
    setEnteredInp({ name: "", email: "", address: "" });
  };

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
          <Button htmlType="submit" type="primary" className="bg-blue-400">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default CRUD;

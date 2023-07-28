import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import moment from "moment/moment";

const RegisteredForm = () => {
  const [enteredInput, setEnteredInput] = useState({
    name: "",
    password: "",
  });
  
  const [selectedDate, setSelectedDate] = useState(null);

  const changeInpHandler = (event) => {
    setEnteredInput({
      ...enteredInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleDatePickerChange = (date) => {
    setSelectedDate(date ? date.format("YYYY-MM-DD") : null);
  };

  const onFinishHandler = () => {
    console.log(enteredInput, selectedDate); // Selected date is now a date object
    setEnteredInput({ name: "", password: "" });
  };

  return (
    <Form
      onFinish={onFinishHandler}
      className="bg-zinc-300 rounded px-10 py-12 shadow-lg"
    >
      <Form.Item
        label="User Name"
        name="name"
        labelCol={{ span: 24 }} // Use the full width for the label
      >
        <Input
          type="text"
          id="name"
          name="name"
          allowClear
          required
          prefix={<UserOutlined />}
          onChange={changeInpHandler}
          value={enteredInput.name}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        labelCol={{ span: 24 }} // Use the full width for the label
      >
        <Input.Password
          type="password"
          id="password"
          name="password"
          allowClear
          required
          placeholder="Password"
          value={enteredInput.password}
          onChange={changeInpHandler}
        />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="date"
        labelCol={{ span: 24 }} // Use the full width for the label
      >
        <DatePicker
          className="block"
          value={selectedDate ? moment(selectedDate, "YYYY-MM-DD") : null}
          required
          onChange={handleDatePickerChange} // Use onChange to get the selected date object
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          className="bg-blue-400 flex items-center justify-center"
          htmlType="submit"
          block
          icon={<LoginOutlined />}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisteredForm;

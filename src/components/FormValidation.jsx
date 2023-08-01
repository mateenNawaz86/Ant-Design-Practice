import React, { useState } from "react";
import moment from "moment";

import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Table,
  Modal,
  message,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const FormValidation = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [editRecord, setEditRecord] = useState(null);
  const [data, setData] = useState([]);

  const [input, setInput] = useState({
    name: "",
    password: "",
    confPsw: "",
    gender: "",
    dateOfBirth: "",
  });

  // Regix for the password
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).{6,}$/;

  //   Columns for the Table
  const columns = [
    {
      key: "0",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "3",
      title: "Password",
      dataIndex: "password",
    },
    {
      key: "4",
      title: "Gender",
      dataIndex: "gender",
    },
    {
      key: "5",
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
    },
    {
      key: "6",
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
  const changeInpHandler = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

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
    setInput({
      name: item.name,
      email: item.email,
      password: item.password,
      gender: item.gender,
      dateOfBirth: item.dateOfBirth,
    });
  };

  const formattedDate = selectedDate ? selectedDate.format("YYYY-MM-DD") : "";

  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
  };

  // Function for Handling the submit functionality
  const handleSubmit = () => {
    if (editRecord) {
      // If there's an editRecord, update the existing record
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editRecord.id
            ? { ...item, ...input, dateOfBirth: formattedDate }
            : item
        )
      );
      message.success("Update Data successfully!");
      setEditRecord(null); // Reset the editRecord after updating
    } else {
      // If there's no editRecord, add a new record
      const randomNumber = parseInt(Math.random() * 1000);
      const id = randomNumber;
      const newRecord = { ...input, id, key: id, dateOfBirth: formattedDate };
      setData([...data, newRecord]);
      message.success("Register successfully!");
    }

    setInput({
      name: "",
      password: "",
      confPsw: "",
      gender: "",
      dateOfBirth: "",
    });
    setSelectedDate(null); // Reset the selectedDate after submission
  };

  return (
    <>
      <Form
        onFinish={handleSubmit}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        className="w-4/5 mx-auto"
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
            { whitespace: true },
            { min: 3, message: "Full name must be atleast 3 characters." },
          ]}
          hasFeedback
        >
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Type your name"
            value={input.name}
            onChange={(e) => changeInpHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            { type: "email", message: "Please enter a valid email!" },
          ]}
          hasFeedback
        >
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Type your email"
            value={input.email}
            onChange={(e) => changeInpHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
            { min: 6 },

            // Method for defining the regex for password
            {
              validator: (_, value) => {
                if (value && passwordRegex.test(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    "Password must be six characters including one uppercase letter, one special character, and alphanumeric characters"
                  );
                }
              },
            },
          ]}
          hasFeedback
        >
          <Input.Password
            type="password"
            name="password"
            id="password"
            placeholder="Type your password"
            value={input.password}
            onChange={(e) => changeInpHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confPsw"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please enter your confirm password",
            },
            { min: 6 },
            // Method for getting the input value and matching with the psw
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The confirm password doesn't matched!");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            type="password"
            name="confPsw"
            id="confPsw"
            placeholder="Type your confirm password"
            value={input.confPsw}
            onChange={(e) => changeInpHandler(e.target.name, e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Gender" name="gender" requiredMark="Optional">
          <Select
            type="text"
            name="gender"
            id="gender"
            placeholder="Select your gender"
            value={input.gender}
            onChange={(value) => changeInpHandler("gender", value)}
          >
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateOfBrith"
          rules={[
            {
              required: true,
              message: "Please provide your date of birth",
            },
          ]}
          hasFeedback
        >
          <DatePicker
            id="dateOfBrith"
            name="dateOfBrith"
            picker="date"
            placeholder="Chose your date of birth"
            className="w-full"
            value={selectedDate ? moment(selectedDate, "YYYY-MM-DD") : null}
            onChange={handleDatePickerChange} // Use onChange to get the selected date object
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          wrapperCol={{ span: 24 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => {
                if (value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    "To be proceed, you need to agree with our Terms & conditions."
                  );
                }
              },
            },
          ]}
        >
          <Checkbox>
            I Agree with the <a href="#">Terms & Conditions</a>.
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            className="bg-blue-400 w-full sm:w-fit"
            htmlType="submit"
          >
            {editRecord ? "Update" : "Register"}
          </Button>
        </Form.Item>
      </Form>

      <div className="my-10">
        <h2 className="text-xl font-semibold text-rose-500 text-center mb-6">
          Data of the Registeration
        </h2>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default FormValidation;

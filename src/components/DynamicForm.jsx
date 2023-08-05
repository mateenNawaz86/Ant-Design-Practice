import { Button, Form, Input, Select, Space } from "antd";
import React from "react";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const DynamicForm = () => {
  const finishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form onFinish={finishHandler} style={{ width: "500px" }}>
        <Form.Item
          name="teacher"
          label="Teacher Name"
          rules={[
            {
              required: true,
              message: "Teacher name is required",
            },
          ]}
        >
          <Input name="teacher" placeholder="Type teacher name here..." />
        </Form.Item>
        <Form.Item
          name="class"
          label="Class Name"
          rules={[
            {
              required: true,
              message: "Class name is required",
            },
          ]}
        >
          <Input name="class" placeholder="Type class name here..." />
        </Form.Item>

        <Form.List name="students">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <Space key={field.key} direction="horizontal " size={12}>
                    <Form.Item
                      name={[field.name, "first"]}
                      label={`${index + 1}-Student`}
                      rules={[
                        {
                          required: true,
                          message: "First name is required",
                        },
                      ]}
                    >
                      <Input
                        name={[field.name, "first"]}
                        placeholder="Type first name..."
                      />
                    </Form.Item>
                    <Form.Item name={[field.name, "last"]}>
                      <Input
                        name={[field.name, "last"]}
                        placeholder="Type last name..."
                      />
                    </Form.Item>
                    <Form.Item name={[field.name, "gender"]}>
                      <Select placeholder="Gender">
                        {["Male", "Female"].map((item, index) => {
                          return (
                            <Select.Option value={item} key={index}>
                              {item}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <MinusCircleOutlined
                      style={{
                        fontSize: "20px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        remove(field.name); // You don't need to pass an argument here
                      }}
                    />
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  icon={<PlusOutlined />}
                  className="flex justify-center items-center"
                  block
                  onClick={() => {
                    add(); // You don't need to pass an argument here
                  }}
                >
                  Add New Student
                </Button>
              </Form.Item>
              <Button htmlType="submit" type="dashed">
                Submit
              </Button>
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
};

export default DynamicForm;

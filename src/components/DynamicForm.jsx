import { Button, Form, Input } from "antd";
import React from "react";

import { PlusOutlined } from "@ant-design/icons";

const DynamicForm = () => {
  return (
    <>
      <Form>
        <Form.Item name="teacher" label="Teacher Name">
          <Input name="teacher" placeholder="Type teacher name here..." />
        </Form.Item>
        <Form.Item name="class" label="Class Name">
          <Input name="class" placeholder="Type class name here..." />
        </Form.Item>

        <Form.List name="students">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  key={field.key}
                  name={[field.name, "first"]}
                  label={`${index + 1}-Student`}
                >
                  <Input
                    name={[field.name, "first"]}
                    placeholder="Type student name here..."
                  />
                </Form.Item>
              ))}
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
            </>
          )}
        </Form.List>
      </Form>
    </>
  );
};

export default DynamicForm;

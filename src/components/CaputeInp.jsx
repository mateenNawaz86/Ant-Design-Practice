import { Form, Input, Select } from "antd";
import React from "react";

const CaputeInp = () => {
  const [form] = Form.useForm();

  //   get the entered name on real-time
  const name = Form.useWatch("myName", form);
  console.log(name);

  //   make decision based on selected experty
  const expert = Form.useWatch("expert", form);

  return (
    <>
      <h1 className="text-xl font-semibold">Welcome {name}!</h1>
      <Form form={form}>
        <Form.Item label="Name" name="myName">
          <Input placeholder="Type name here..." name={"myName"} id="myName" />
        </Form.Item>
        <Form.Item labelname="Experties" name={"expert"}>
          <Select placeholder="Select experties">
            <Select.Option value="javascript">JavaScript</Select.Option>
            <Select.Option value="nodejs">Node.js</Select.Option>
            <Select.Option value="reactjs">React.js</Select.Option>
            <Select.Option value="python">Python</Select.Option>
          </Select>
        </Form.Item>
        {expert === "nodejs" ? (
          <Form.Item label="Please specify the experties" name="specify">
            <Input placeholder="Please specifys" />
          </Form.Item>
        ) : null}
      </Form>
    </>
  );
};

export default CaputeInp;

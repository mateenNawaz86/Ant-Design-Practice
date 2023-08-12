import React, { useState } from "react";
import { Button, Form, Input, Steps } from "antd";
import {
  LogoutOutlined,
  ProfileOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const StepsForm = () => {
  const [current, setCurrent] = useState(0);
  const [loginDetails, setLoginDetails] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);

  //   Function for handling the login-form
  const onFinishLogin = (values) => {
    setLoginDetails(values);
    setCurrent(1);
  };

  //   Function for handling the profile-form
  const onFinishProfile = (values) => {
    setProfileDetails(values);
    setCurrent(2);
  };

  //   Array of forms
  const forms = [
    <LoginForm onFinish={onFinishLogin} initialValues={loginDetails} />,
    <ProfileForm onFinish={onFinishProfile} initialValues={profileDetails} />,
    <FinishForm />,
  ];

  //   Method for checking the disablity of different steps
  const isStepDisable = (stepNum) => {
    if (stepNum === 0) {
      return false;
    }
    if (stepNum === 1) {
      return loginDetails === null;
    }
    if (stepNum === 2) {
      return loginDetails === null || profileDetails === 0;
    }
  };

  return (
    <>
      <>
        <Steps
          onChange={setCurrent}
          current={current}
          style={{ padding: "32px 16px" }}
        >
          <Steps.Step disabled={0} title="Login" icon={<LogoutOutlined />} />
          <Steps.Step disabled={1} title="Profile" icon={<ProfileOutlined />} />
          <Steps.Step
            disabled={2}
            title="Finished"
            icon={<CheckCircleOutlined />}
          />
        </Steps>
        {forms[current]}
      </>
    </>
  );
};

// Function for login form
function LoginForm({ onFinish, initialValues }) {
  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 10 }}
      initialValues={initialValues}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: "Please fill up the email field",
          },
        ]}
        hasFeedback
      >
        <Input
          type="text"
          placeholder="Type your email here..."
          name="email"
          id="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please fill up the password field",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          type="password"
          placeholder="Type your password here..."
          name="password"
          id="password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "blue",
          }}
        >
          Continue
        </Button>
      </Form.Item>
    </Form>
  );
}

// Profile form
function ProfileForm({ onFinish, initialValues }) {
  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 10 }}
      initialValues={initialValues}
    >
      <Form.Item
        name="fName"
        label="First Name"
        rules={[
          {
            required: true,
            message: "Please fill up the first name field",
          },
        ]}
        hasFeedback
      >
        <Input
          type="text"
          placeholder="Type your first name here..."
          name="fName"
          id="fName"
        />
      </Form.Item>
      <Form.Item
        name="lName"
        label="Last Name"
        rules={[
          {
            required: true,
            message: "Please fill up the last name field",
          },
        ]}
        hasFeedback
      >
        <Input
          type="lName"
          placeholder="Type your last name here..."
          name="lName"
          id="lName"
        />
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "blue",
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

// Finish Form
function FinishForm() {
  return (
    <>
      <h1>You're almost done!</h1>
      <Button>Finish</Button>
    </>
  );
}

export default StepsForm;

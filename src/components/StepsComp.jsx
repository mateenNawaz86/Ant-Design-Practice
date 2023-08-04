import React, { useState } from "react";
import { Divider, Space, Steps } from "antd";

const StepsComp = () => {
  const [current, setCurrent] = useState(1);
  return (
    <>
      <Space
        direction="vertical"
        size={10}
        style={{
          width: "80%",
        }}
      >
        <Steps>
          <Steps.Step title="Start" />
          <Steps.Step title="In Progress" />
          <Steps.Step title="Finished" />
        </Steps>
        <Divider />
        <Steps labelPlacement="vertical" current={1}>
          <Steps.Step title="Personal Info" />
          <Steps.Step title="In Progress" />
          <Steps.Step title="Waiting" />
        </Steps>
        <Divider />

        <Steps
          current={current}
          onChange={(e) => {
            setCurrent(e);
          }}
        >
          <Steps.Step title="Personal Info" />
          <Steps.Step title="In Progress" />
          <Steps.Step title="Waiting" />
        </Steps>
        <h2 className="text-center text-2xl font-semibold">
          This is my step {current}
        </h2>
        <Divider />

        <Steps progressDot={true} current={1}>
          <Steps.Step title="Personal Info" />
          <Steps.Step title="In Progress" />
          <Steps.Step title="Waiting" />
        </Steps>
        <Divider />

        <Steps progressDot={true} current={1}>
          <Steps.Step title="Personal Info" />
          <Steps.Step title="In Progress" subTitle="2 Min" />
          <Steps.Step
            title="Waiting"
            description="the procedure is under process"
          />
        </Steps>
        <Divider />

        <Steps current={1} percent={70}>
          <Steps.Step title="Personal Info" />
          <Steps.Step title="In Progress" subTitle="2 Min" />
          <Steps.Step title="Waiting" />
        </Steps>
        <Divider />

        <Steps direction="vertical">
          <Steps.Step title="Personal Info" />
          <Steps.Step title="In Progress" subTitle="2 Min" />
          <Steps.Step title="Waiting" />
        </Steps>
        <Divider />

        <Steps className="mb-8">
          <Steps.Step title="Personal Info" />
          <Steps.Step title="In Progress" status="error" />
          <Steps.Step title="Waiting" />
        </Steps>
      </Space>
    </>
  );
};

export default StepsComp;

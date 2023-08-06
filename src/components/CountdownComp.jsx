import React, { useState } from "react";
import { Divider, Statistic } from "antd";
import { FieldTimeOutlined, DollarCircleFilled } from "@ant-design/icons";

const { Countdown } = Statistic;

const CountdownComp = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Countdown
        title={
          <p className="text-lg font-medium text-blue-900 ">
            <FieldTimeOutlined /> Count Down Timer
          </p>
        }
        value={new Date().setMinutes(new Date().getMinutes() + 2)}
        valueStyle={{ color: "blue" }}
      />
      <Divider />
      <Countdown
        title={
          <p className="text-lg font-medium text-blue-900 ">
            <DollarCircleFilled /> Sale
          </p>
        }
        format="HH:mm:ss:SSS"
        value={new Date().setMinutes(new Date().getMinutes() + 4)}
        valueStyle={{ color: "blue" }}
        prefix={"Sale ending in "}
        suffix={<p className="text-red-900">Hurry up!</p>}
      />

      <Divider />
      <Countdown
        title={<p>Count Down 200 seconds</p>}
        value={new Date().setSeconds(new Date().getSeconds() + 200)}
        valueStyle={{ color: "blue" }}
        onChange={(item) => {
          setValue(item);
        }}
        format={""}
        prefix={`Timer ending in ${Math.round(value / 1000)}`}
      />
    </>
  );
};

export default CountdownComp;

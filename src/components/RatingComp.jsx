import React from "react";
import { Rate, Space } from "antd";
import {
  HeartOutlined,
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const smileRaitng = [<FrownOutlined />, <MehOutlined />, <SmileOutlined />];
const RatingComp = () => {
  return (
    <Space direction="vertical" size={15}>
      <Rate defaultValue={5} />
      <Rate defaultValue={4} />
      <Rate defaultValue={3} />
      <Rate defaultValue={2} />
      <Rate defaultValue={1} />
      <Rate allowHalf />
      <Rate count={3} defaultValue={2} tooltips={["Bad", "Average", "Good"]} />
      <Rate
        count={4}
        defaultValue={4}
        style={{
          color: "green",
        }}
        allowHalf
      />

      <Rate
        defaultValue={3}
        character={<HeartOutlined />}
        style={{
          color: "red",
        }}
        allowHalf
      />

      <Rate
        style={{
          color: "red",
        }}
        character={({ index }) => {
          return smileRaitng[index];
        }}
      />
    </Space>
  );
};

export default RatingComp;

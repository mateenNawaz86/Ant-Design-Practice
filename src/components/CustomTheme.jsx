import React from "react";
import {
  AppleFilled,
  BugTwoTone,
  HeartFilled,
  LoadingOutlined,
  LogoutOutlined,
  PieChartFilled,
} from "@ant-design/icons";

import { Button, Divider } from "antd";

const CustomTheme = () => {
  return (
    <>
      <div className="flex justify-between items-center w-1/2">
        <PieChartFilled style={{ color: "purple", fontSize: 100 }} />
        <AppleFilled style={{ color: "purple", fontSize: 100 }} />
        <LoadingOutlined spin style={{ color: "red", fontSize: 100 }} />
        <PieChartFilled
          rotate={110}
          style={{ color: "purple", fontSize: 100 }}
        />
        <BugTwoTone twoToneColor="green" style={{ fontSize: 100 }} />
      </div>
      <div>
        <Divider />
        <HeartFilled style={{ color: "red", fontSize: 300 }} />

        <Divider />

        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<LogoutOutlined />}
        >
          Button with the custom icon
        </Button>
      </div>
    </>
  );
};

export default CustomTheme;

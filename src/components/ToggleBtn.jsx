import React from "react";
import { Space, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons/lib/icons";

const ToggleBtn = () => {
  return (
    <>
      <Space direction="vertical" size={14}>
        <Switch />
        <Switch defaultChecked={true} />
        <Switch
          defaultChecked={true}
          checkedChildren="on"
          unCheckedChildren="off"
        />
        <Switch
          defaultChecked={true}
          checkedChildren="Toggle to on"
          unCheckedChildren="Toggle to off"
        />
        <Switch
          defaultChecked={true}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      </Space>
    </>
  );
};

export default ToggleBtn;

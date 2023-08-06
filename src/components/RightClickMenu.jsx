import React from "react";
import { Dropdown, Menu } from "antd";
import {
  CopyOutlined,
  ShareAltOutlined,
  ReloadOutlined,
  FacebookOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const RightClickMenu = () => {
  const menu = (
    <Menu
      items={[
        {
          label: "Copy",
          key: "copy",
          icon: <CopyOutlined />,
        },
        {
          label: "Share ",
          key: "share",
          icon: <ShareAltOutlined />,
          children: [
            {
              label: "Facebook",
              key: "fb",
              icon: <FacebookOutlined />,
            },
            {
              label: "Twitter",
              key: "tw",
              icon: <TwitterOutlined />,
            },
            {
              label: "What's App",
              key: "wa",
              icon: <WhatsAppOutlined />,
            },
          ],
        },
        {
          label: "Reload ",
          key: "reload",
          icon: <ReloadOutlined />,
        },
        {
          label: "Delete ",
          key: "delete",
          icon: <DeleteOutlined />,
          danger: true,
        },
      ]}
    />
  );
  return (
    <>
      <Dropdown overlay={menu} trigger={["contextMenu"]}>
        <div className="bg-gray-400 w-full h-screen">
          <p className="text-xl font-semibold tracking-wider text-white mt-10">
            Right Click Me
          </p>
        </div>
      </Dropdown>
    </>
  );
};

export default RightClickMenu;

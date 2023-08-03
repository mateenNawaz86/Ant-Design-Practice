import { Input, Menu, Space } from "antd";
import React from "react";
import {
  HomeFilled,
  UserOutlined,
  EditOutlined,
  DashboardOutlined,
  MoneyCollectOutlined,
  DollarCircleOutlined,
  SwitcherOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const MenuComp = () => {
  return (
    <>
      <Space>
        <Menu
          mode="inline"
          items={[
            {
              label: <Input.Search placeholder="Type here to search..." />,
              key: "search",
            },
            {
              label: "Home",
              key: "home",
              icon: <HomeFilled />,
            },
            {
              label: "Dashboard",
              key: "dashboard",
              icon: (
                <DashboardOutlined
                  style={{
                    color: "orange",
                  }}
                />
              ),
              children: [
                {
                  label: "Revenue",
                  key: "rev",
                  icon: <DollarCircleOutlined style={{ color: "green" }} />,
                },
                {
                  label: "Expenses",
                  key: "exp",
                  icon: (
                    <MoneyCollectOutlined
                      style={{
                        color: "red",
                      }}
                    />
                  ),
                },
              ],
            },
            {
              label: "User Management",
              key: "um",
              icon: (
                <UserOutlined
                  style={{
                    color: "blue",
                  }}
                />
              ),
              children: [
                {
                  label: "Edit Profile",
                  key: "edit-profile",
                  icon: (
                    <EditOutlined
                      style={{
                        color: "blue",
                      }}
                    />
                  ),
                },
                {
                  label: "Switch Account",
                  key: "sa",
                  icon: (
                    <SwitcherOutlined
                      style={{
                        color: "#f0a",
                      }}
                    />
                  ),
                },
              ],
            },
            {
              label: "Sign out",
              key: "so",
              danger: true,
              icon: <LogoutOutlined />,
            },
          ]}
        ></Menu>
      </Space>
    </>
  );
};

export default MenuComp;

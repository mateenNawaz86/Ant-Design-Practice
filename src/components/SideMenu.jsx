import React from "react";
import {
  DashboardOutlined,
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen ">
      <Header />

      <div className="flex flex-1">
        <Menu
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              label: "Home",
              icon: <HomeOutlined />,
              key: "/",
            },
            {
              label: "Dashboard",
              icon: <DashboardOutlined />,
              key: "/dashboard",
            },
            {
              label: "Profile",
              icon: <ProfileOutlined />,
              key: "/profile",
            },
            {
              label: "User List",
              icon: <UserOutlined />,
              key: "/user-list",
              children: [
                {
                  label: "Active User",
                  key: "/active-user",
                },
                {
                  label: "Disabled User",
                  key: "/disabled-user",
                },
              ],
            },
            {
              label: "Account Setting",
              icon: <SettingOutlined />,
              key: "/account-setting",
            },
            {
              label: "Signout",
              icon: <LogoutOutlined />,
            },
          ]}
        ></Menu>

        <Content />
      </div>
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <div className="h-20 bg-blue-400 w-full flex justify-center items-center text-xl font-semibold text-white">
      Header
    </div>
  );
}
function Footer() {
  return (
    <div className="h-20 bg-orange-400 w-full flex justify-center items-center text-xl font-semibold text-white">
      Footer
    </div>
  );
}

function Content() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/profile" element={<div>Profile</div>} />
      <Route path="/user-list" element={<div>User List</div>} />
      <Route path="/active-user" element={<div>Active User List</div>} />
      <Route path="/disabled-user" element={<div> Disabled User List</div>} />
      <Route path="/account-setting" element={<div>Account Setting</div>} />
    </Routes>
  );
}

export default SideMenu;

import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const ResponsiveNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="hidden sm:block">
        <MenuComp />
      </div>
      <div className="block sm:hidden">
        <MenuOutlined
          onClick={() => setShowMenu(true)}
          style={{
            padding: "10px  0 0 20px",
            fontSize: "22px",
          }}
        />
      </div>
      <Drawer
        open={showMenu}
        onClose={() => setShowMenu(!showMenu)}
        closable={true}
      >
        <MenuComp isInline />
      </Drawer>
    </>
  );
};

function MenuComp({ isInline = false }) {
  return (
    <Menu
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "About Us",
          key: "au",
        },
        {
          label: "Services",
          key: "services",
        },
        {
          label: "Reviews",
          key: "reviews",
        },
      ]}
    />
  );
}

export default ResponsiveNav;

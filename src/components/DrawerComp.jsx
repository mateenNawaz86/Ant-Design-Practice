import React, { useState } from "react";
import { Button, Drawer } from "antd";

const DrawerComp = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button
        type="dashed"
        onClick={() => {
          setIsVisible(true);
        }}
      >
        Open to Drawer
      </Button>
      <Drawer
        placement="left"
        visible={isVisible}
        title="Drawer Title is here"
        footer="Drawer footer is here"
        onClose={() => {
          setIsVisible(false);
        }}
      >
        <p>This is the drawer component</p>
      </Drawer>
    </>
  );
};

export default DrawerComp;

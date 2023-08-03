import {
  AppleOutlined,
  AndroidOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Space, Tabs } from "antd";
import React, { useRef, useState } from "react";

const TabsComp = () => {
  const newTabIndex = useRef(3);
  const [tabList, setTabList] = useState([
    {
      tab: "Tab 1",
      key: "tab1",
    },
    {
      tab: "Tab 2",
      key: "tab2",
    },
    {
      tab: "Tab 3",
      key: "tab3",
    },
  ]);

  const editCardHandler = (tabKey, action) => {
    if (action === "add") {
      setTabList((prev) => [
        ...prev,
        {
          tab: `Tab ${newTabIndex.current}`,
          key: `tab${newTabIndex.current}`,
        },
      ]);
      newTabIndex.current += 1;
    } else if (action === "remove") {
      setTabList((prev) => prev.filter((tab) => tab.key !== tabKey));
      console.log(`This tab ${tabKey} is removed.`);
    }
  };

  return (
    <>
      <Space size={20} direction="vertical">
        {/* Tabs on the top */}
        <Tabs>
          <Tabs.TabPane tab="Tab1" key="tab1">
            <p>This is a content of Tab1</p>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab2" key="tab2">
            <p>This is a content of Tab2</p>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab3" key="tab3">
            <p>This is a content of Tab3</p>
          </Tabs.TabPane>
        </Tabs>
        {/* Tabs on the left */}
        <Tabs tabPosition="left">
          <Tabs.TabPane tab="Tab1" key="tab1">
            <p>This is a content of Tab1</p>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab2" key="tab2">
            <p>This is a content of Tab2</p>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab3" key="tab3">
            <p>This is a content of Tab3</p>
          </Tabs.TabPane>
        </Tabs>

        {/* Tabs with Icon */}
        <Tabs>
          <Tabs.TabPane
            tab={
              <span>
                <AppleOutlined /> Apple
              </span>
            }
            key="tab1"
          >
            <p>This is a content of Apple</p>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <AndroidOutlined /> Andorid
              </span>
            }
            key="tab2"
          >
            <p>This is a content of Andorid</p>
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                <GoogleOutlined /> Goolge
              </span>
            }
            key="tab3"
          >
            <p>This is a content of Goolge</p>
          </Tabs.TabPane>
        </Tabs>
        {/* Tabs with the delete & add functionality */}
        <Tabs type="editable-card" onEdit={editCardHandler}>
          {tabList.map((item, index) => {
            return (
              <Tabs.TabPane
                closable={index > 1}
                tab={`Tab ${item.tab}`}
                key={item.key}
              >
                <p>This is a content of {item.tab}</p>
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </Space>
    </>
  );
};

export default TabsComp;

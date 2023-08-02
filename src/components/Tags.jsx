import React from "react";
import { Space, Tag } from "antd";
import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";

const Tags = () => {
  const skillTags = [
    "Ant Design",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <>
      <Space direction="vertical" size={2} className="space-y-3">
        <Tag>Tag 1</Tag>
        <Tag
          closable
          onClose={() => {
            console.log("Tag was closed!");
          }}
        >
          Tag 2
        </Tag>

        <Tag closable color="error">
          Error
        </Tag>
        <Tag closable color="warning">
          Warning
        </Tag>
        <Tag closable color="error" closeIcon={<DeleteOutlined />}>
          Custom Remove Icon
        </Tag>
        <Tag closable closeIcon={<DeleteOutlined />} color="#f0f">
          Custom Color Tag
        </Tag>
        <Tag
          closable
          closeIcon={<DeleteOutlined style={{ fontSize: "13px" }} />}
          color="#f0f"
          style={{
            borderRadius: 10,
            color: "blue",
            backgroundColor: "#c4c4c4",
          }}
        >
          Custom Border Tag
        </Tag>

        <Tag
          closable
          style={{
            backgroundColor: "orange",
            color: "#fff",
            height: "30px",
            borderRadius: "20px",
          }}
          closeIcon={<DeleteOutlined style={{ fontSize: "13px" }} />}
          icon={<LoadingOutlined />}
        >
          Loading...
        </Tag>

        {/* Tags passing through a Map */}
        <Space direction="horizontal">
          {skillTags.map((tag, index) => {
            return (
              <Tag closable color="green" key={index}>
                {tag}
              </Tag>
            );
          })}
        </Space>
      </Space>
    </>
  );
};

export default Tags;

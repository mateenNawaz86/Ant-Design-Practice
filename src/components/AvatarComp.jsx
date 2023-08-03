import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import React from "react";

const AvatarComp = () => {
  return (
    <>
      <Space direction="vertical" size={10}>
        <Avatar
          size={60}
          shape="circle"
          style={{
            backgroundColor: "green",
            color: "#fff",
            fontSize: "2rem",
            boxShadow: "0 6px 12px rgba(182, 182, 182, 0.75)",
          }}
        >
          Mateen
        </Avatar>
        <Avatar
          size={60}
          shape="square"
          style={{
            backgroundColor: "orange",
          }}
        >
          Aftab
        </Avatar>
        <Avatar
          size={60}
          icon={<UserOutlined />}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <Avatar.Group>
          <Avatar
            size={60}
            shape="circle"
            style={{
              backgroundColor: "green",
              color: "#fff",
              fontSize: "2rem",
              boxShadow: "0 6px 12px rgba(182, 182, 182, 0.75)",
            }}
          >
            Mateen
          </Avatar>
          <Avatar
            size={60}
            shape="circle"
            style={{
              backgroundColor: "orange",
            }}
          >
            Aftab
          </Avatar>
          <Avatar
            size={60}
            icon={<UserOutlined />}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Avatar.Group>
        <Avatar.Group maxCount={2}>
          <Avatar
            size={60}
            shape="circle"
            style={{
              backgroundColor: "green",
              color: "#fff",
              fontSize: "2rem",
              boxShadow: "0 6px 12px rgba(182, 182, 182, 0.75)",
            }}
          >
            Mateen
          </Avatar>
          <Avatar
            size={60}
            shape="circle"
            style={{
              backgroundColor: "orange",
            }}
          >
            Aftab
          </Avatar>
          <Avatar
            size={60}
            icon={<UserOutlined />}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Avatar.Group>
      </Space>
    </>
  );
};

export default AvatarComp;

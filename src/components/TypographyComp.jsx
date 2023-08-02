import React, { useState } from "react";
import { Space, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const { Title, Text, Paragraph, Link } = Typography;

const TypographyComp = () => {
  const [text, setText] = useState("Code with Mateen");
  return (
    <>
      <Space direction="vertical" size={3}>
        <Title>Code with Mateen Nawaz</Title>
        <Text>Code with Mateen Nawaz</Text>
        <Text strong>Code with Mateen Nawaz</Text>
        <Text underline>Code with Mateen Nawaz</Text>
        <Text mark>Code with Mateen Nawaz</Text>
        <Text type="success">Code with Mateen Nawaz</Text>
        <Text disabled>Code with Mateen Nawaz</Text>
        <Link>Code with Mateen Nawaz</Link>

        <Paragraph>Paragraph text is here</Paragraph>
        <Paragraph
          editable={{
            onChange: (value) => {
              setText(value);
            },
            triggerType: "icon|text",
            tooltip: "Click to edit",
            enterIcon: <CheckOutlined />,
          }}
        >
          {text}
        </Paragraph>
        <Paragraph copyable>Code with Mateen Nawaz</Paragraph>

        <Paragraph
          ellipsis={{
            rows: 2,
            expandable: true,
            symbol: "Show more",
          }}
          style={{
            width: "300px",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          quisquam ipsam architecto expedita blanditiis officiis animi cumque,
          vel tempore ullam quos a illo deserunt voluptatum aut eaque doloribus
          explicabo ipsa placeat quasi ut necessitatibus? Non dolorem facere
          omnis ea consequatur dolor? Voluptas minus perferendis natus
          aspernatur saepe provident nesciunt magnam?
        </Paragraph>
      </Space>
    </>
  );
};

export default TypographyComp;

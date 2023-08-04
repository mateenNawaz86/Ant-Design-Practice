import { Collapse, Typography } from "antd";
import React from "react";
import { CaretRightFilled } from "@ant-design/icons";

const CollapseComp = () => {
  return (
    <>
      <Collapse
        accordion={true}
        className="w-72"
        expandIconPosition="start"
        expandIcon={({ isActive }) => {
          return <CaretRightFilled rotate={isActive ? 90 : 0} />;
        }}
      >
        <Collapse.Panel key={"1"} header="This is Panel #1">
          <Typography.Text>This is panel #1 text.</Typography.Text>
        </Collapse.Panel>
        <Collapse.Panel key={"2"} header="This is Panel #2">
          <Typography.Text>This is panel #2 text.</Typography.Text>
        </Collapse.Panel>
        <Collapse.Panel key={"3"} header="This is Panel #3">
          <Typography.Text disabled>This is panel #3 text.</Typography.Text>
        </Collapse.Panel>
      </Collapse>
    </>
  );
};

export default CollapseComp;

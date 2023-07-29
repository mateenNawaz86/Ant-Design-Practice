import React, { useState } from "react";
import { Alert, Button, Progress, Spin } from "antd";

const Spinner = () => {
  const [loading, setLoading] = useState(false);

  const submitHandler = () => setLoading(!loading);
  return (
    <>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>

      <Button
        type="primary"
        onClick={submitHandler}
        className="bg-blue-400 mt-4"
      >
        Alert Progress
      </Button>

      {/* Progress bar */}
      <div className="my-8 w-1/2">
        <Progress percent={28} status="active" />
        <Progress percent={28} type="circle" strokeColor="orange" />
        <Progress
          percent={28}
          type="circle"
          strokeColor="green"
          status="success"
        />
        <Progress
          percent={28}
          type="circle"
          strokeColor="red"
          status="exception"
        />
        <Progress percent={28} status="success" />
      </div>
    </>
  );
};

export default Spinner;

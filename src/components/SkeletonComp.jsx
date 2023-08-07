import React, { useState, useEffect } from "react";
import { Skeleton, Space } from "antd";

const SkeletonComp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((err) => {
          console.log(err);
        });
    }, 3000);
  }, []);

  return (
    <Space direction="vertical" size={16}>
      {loading ? (
        <Skeleton
          active
          avatar
          title={{ width: 270 }}
          paragraph={{
            rows: 5,
            width: [200, 250, 300, 350, 300],
          }}
        />
      ) : (
        <>
          <h1>{data?.title}</h1>
          <p>{data?.body}</p>
        </>
      )}

      <Skeleton.Avatar active />
      <Skeleton.Button
        active
        style={{
          borderRadius: "100px",
          width: "300px",
        }}
      />
      <Skeleton.Image active />
      <Skeleton.Input active />
      <Skeleton.Node active />
      <Skeleton.Node active>
        <p>Loading...</p>
      </Skeleton.Node>
    </Space>
  );
};

export default SkeletonComp;

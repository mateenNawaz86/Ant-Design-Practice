import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response > response.json())
      .then((result) => setData(result))
      .catch((error) => {
        console.log(error);
      });
  }, [third]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Completed" : "In Progress"}</p>;
      },
    },
  ];
  return <></>;
};

export default Pagination;

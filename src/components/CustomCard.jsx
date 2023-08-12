import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
const { Meta } = Card;

const CustomCard = () => {
  const [myData, setMyData] = useState([]);

  // API calling
  useEffect(() => {
    const apiURL = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(apiURL)
      .then((response) => setMyData(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {myData.map((item) => {
          const { id, title, thumbnailUrl } = item;
          return (
            <Card
              key={id}
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt={title} src={thumbnailUrl} />}
            >
              <Meta title={title} description={title} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCard;

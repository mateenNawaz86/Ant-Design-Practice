import { Calendar } from "antd";
import React from "react";

const CustomCalender = () => {
  return (
    <div className="mt-10">
      <Calendar
        onSelect={(data) => {
          console.log(`Selected data is ${data}`);
        }}
        disabledDate={(data) => {
          if (new Date(data).getDate() === 22) {
            return true;
          } else {
            return false;
          }
        }}
        dateCellRender={(date) => {
          if (new Date(date).getDate() === 21) {
            return <p>My Queen Birthday</p>;
          }
        }}
        monthCellRender={(date) => {
          if (new Date(date).getMonth() === "December") {
            return <p>My Favorite month</p>;
          }
        }}
      />
    </div>
  );
};

export default CustomCalender;

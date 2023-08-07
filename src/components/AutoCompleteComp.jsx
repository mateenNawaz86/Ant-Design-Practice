import { AutoComplete } from "antd";
import React from "react";

const AutoCompleteComp = () => {
  const option = [
    {
      label: "One",
      value: "one",
    },
    {
      label: "Two",
      value: "two",
    },
    {
      label: "Three",
      value: "three",
    },
    {
      label: "Four",
      value: "four",
    },
    {
      label: "Five",
      value: "five",
    },
    {
      label: "Six",
      value: "six",
    },
  ];
  return (
    <>
      <AutoComplete
        placeholder="Type here..."
        style={{
          width: 300,
        }}
        options={option}
        filterOption={true}
        onSelect={(value) => {
          console.log(value);
        }}
        onSearch={(value) => {
          console.log(value);
        }}
      />
    </>
  );
};

export default AutoCompleteComp;

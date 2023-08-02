import React from "react";
import { Divider } from "antd";

const CustomDivider = () => {
  return (
    <>
      <p className="w-4/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel a
        repellat possimus harum. Esse corporis iure architecto quod
        reprehenderit eos! Necessitatibus minima accusamus, saepe natus dolorum
        molestias rerum voluptatem aliquam sequi odio dolor odit illum repellat
        nostrum eos tempore adipisci eveniet nam asperiores laborum quo. Ea
        consequuntur enim nulla.
      </p>
      <Divider
        style={{
          borderColor: "red",
        }}
      />
      <p className="w-4/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel a
        repellat possimus harum. Esse corporis iure architecto quod
        reprehenderit eos! Necessitatibus minima accusamus, saepe natus dolorum
        molestias rerum voluptatem aliquam sequi odio dolor odit illum repellat
        nostrum eos tempore adipisci eveniet nam asperiores laborum quo. Ea
        consequuntur enim nulla.
      </p>
      <Divider
        style={{
          borderColor: "blue",
          borderStyle: "dotted",
        }}
      />
      <p className="w-4/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel a
        repellat possimus harum. Esse corporis iure architecto quod
        reprehenderit eos! Necessitatibus minima accusamus, saepe natus dolorum
        molestias rerum voluptatem aliquam sequi odio dolor odit illum repellat
        nostrum eos tempore adipisci eveniet nam asperiores laborum quo. Ea
        consequuntur enim nulla.
      </p>
      <Divider
        style={{
          borderColor: "blue",
          borderStyle: "dotted",
        }}
      >
        Mateen
      </Divider>
      <p className="w-4/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel a
        repellat possimus harum. Esse corporis iure architecto quod
        reprehenderit eos! Necessitatibus minima accusamus, saepe natus dolorum
        molestias rerum voluptatem aliquam sequi odio dolor odit illum repellat
        nostrum eos tempore adipisci eveniet nam asperiores laborum quo. Ea
        consequuntur enim nulla.
      </p>
      <Divider
        style={{
          borderColor: "orange",
          borderStyle: "dashed",
        }}
        orientation="left"
      >
        Mateen
      </Divider>
      <p className="w-4/5 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vel a
        repellat possimus harum. Esse corporis iure architecto quod
        reprehenderit eos! Necessitatibus minima accusamus, saepe natus dolorum
        molestias rerum voluptatem aliquam sequi odio dolor odit illum repellat
        nostrum eos tempore adipisci eveniet nam asperiores laborum quo. Ea
        consequuntur enim nulla.
      </p>
      <Divider
        style={{
          borderColor: "green",
          borderStyle: "groove",
        }}
        orientation="right"
      >
        Mateen
      </Divider>

      <div className="flex ">
        <p>Link</p>
        <Divider
          style={{
            borderColor: "orange",
          }}
          type="vertical"
        />
        <p>Link</p>
        <Divider
          style={{
            borderColor: "orange",
          }}
          type="vertical"
        />
        <p>Link</p>
      </div>
    </>
  );
};

export default CustomDivider;

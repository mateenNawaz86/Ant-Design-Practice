import React, { useRef } from "react";
import { Button, Carousel, Space } from "antd";

const CarouselComp = () => {
  const ref = useRef();
  return (
    <>
      <div className="w-96 h-80 rounded-sm">
        <Carousel autoplay pauseOnHover ref={ref} effect="fade">
          <div className="bg-green-300">
            <h2 className="text-2xl font-semibold leading-[300px] text-center text-white">
              Mateen Nawaz
            </h2>
          </div>
          <div className="bg-blue-300">
            <h2 className="text-2xl font-semibold leading-[300px] text-center text-white">
              Waseem Nawaz
            </h2>
          </div>
          <div className="bg-orange-300">
            <h2 className="text-2xl font-semibold leading-[300px] text-center text-white">
              Aftab Nawaz
            </h2>
          </div>
          <div className="bg-pink-300">
            <h2 className="text-2xl font-semibold leading-[300px] text-center text-white">
              Aamir Nawaz
            </h2>
          </div>
        </Carousel>
      </div>

      <Space size={10}>
        <Button
          onClick={() => {
            ref.current.prev();
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            ref.current.goTo(0);
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            ref.current.next();
          }}
        >
          Next
        </Button>
      </Space>
    </>
  );
};

export default CarouselComp;

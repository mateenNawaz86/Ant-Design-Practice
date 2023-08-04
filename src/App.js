import React from "react";
// import CollapseComp from "./components/CollapseComp";
import DynamicForm from "./components/DynamicForm";
// import CarouselComp from "./components/CarouselComp";
// import StepsComp from "./components/StepsComp";
// import AvatarComp from "./components/AvatarComp";
// import MenuComp from "./components/MenuComp";
// import TabsComp from "./components/TabsComp";
// import CustomDivider from "./components/CustomDivider";
// import TypographyComp from "./components/TypographyComp";
// import EditTable from "./components/EditTable";
// import CustomPagination from "./components/CustomPagination";
// import Tags from "./components/Tags";
// import FileUpload from "./components/FileUpload";
// import SearchBox from "./components/SearchBox";
// import FormValidation from "./components/FormValidation";
// import Pagination from "./components/Pagination";
// import SelectionTable from "./components/SelectionTable";
// import CustomTheme from "./components/CustomTheme";
// import CRUD from "./components/CRUD";
// import Spinner from "./components/Spinner";
// import RegisteredForm from "./components/RegisteredForm";
// import ExpForm from "./components/ExpForm";
// import TableComp from "./components/TableComp";
// import { Button, Input } from "antd";
// import { PoweroffOutlined } from "@ant-design/icons";
// import { Select, Button } from "antd";

const App = () => {
  // const [loading, setLoading] = useState(false);
  // const [input, setInput] = useState("");

  // const onBtnClick = () => {
  //   console.log(input);
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setInput("");
  //   }, 2000);
  // };

  // const changeHandler = (value) => {
  //   setInput(value);
  //   console.log("Selected Value: ", value);
  // };

  // const fruits = ["Mango", "Ornage", "Banana", "Cherry", "Pine-Apple"];
  return (
    <>
      {/* <div className="flex justify-center flex-col items-center gap-4 h-screen w-full">
        <div>
          <Input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            onChange={changeHandler}
            value={input.name}
            prefix={<UserOutlined />}
            allowClear
            className="mb-2"
          />
          <Input.Password
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
            value={input.password}
            prefix={<LockTwoTone />}
            allowClear
          />
        </div>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          onClick={onBtnClick}
          loading={loading}
          className="bg-blue-400 flex items-center"
        >
          Submit
        </Button>
        <h2 className="text-white">
          Select which one is your favourite fruit?
        </h2>
        <Select
          mode="multiple"
          placeholder="Select Fruit"
          className="w-2/4"
          onChange={changeHandler}
        >
          {fruits.map((item, index) => {
            return (
              <Select.Option value={item} key={index}>
                {item}
              </Select.Option>
            );
          })}
        </Select>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          onClick={onBtnClick}
          loading={loading}
          className="bg-blue-400 flex items-center"
        >
          Submit
        </Button>
      </div> */}

      <div className="flex justify-center items-center flex-col h-screen">
        {/* <RegisteredForm /> */}
        {/* <TableComp /> */}
        {/* <ExpForm /> */}
        {/* <Spinner /> */}
        {/* <Pagination /> */}
        {/* <SelectionTable /> */}
        {/* <CustomTheme /> */}
        {/* <CRUD /> */}
        {/* <SearchBox /> */}
        {/* <FormValidation /> */}
        {/* <FileUpload /> */}
        {/* <Tags /> */}
        {/* <EditTable /> */}
        {/* <CustomPagination /> */}
        {/* <TypographyComp /> */}
        {/* <CustomDivider /> */}
        {/* <MenuComp /> */}
        {/* <TabsComp /> */}
        {/* <AvatarComp /> */}
        {/* <CarouselComp /> */}
        {/* <StepsComp /> */}
        {/* <CollapseComp /> */}
        <DynamicForm />
      </div>
    </>
  );
};

export default App;

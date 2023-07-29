import React, { useState } from "react";
import { Button, DatePicker, Form, Input, TimePicker, message } from "antd";
import moment from "moment";

const ExpForm = () => {
  const [enteredInp, setEnteredInp] = useState({
    title: "",
    companyName: "",
    description: "",
  });

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDatePickerChange = (dates) => {
    const [startDate, endDate] = dates; // Destructure the dates array to get start and end date
    setSelectedStartDate(startDate ? startDate.format("YYYY-MM-DD") : null); // Use startDate as the selected start date
    setSelectedEndDate(endDate ? endDate.format("YYYY-MM-DD") : null); // Use endDate as the selected end date
  };

  const changeInpHandler = (event) => {
    setEnteredInp({
      ...enteredInp,
      [event.target.name]: event.target.value,
    });
  };

  const onFinishHandler = () => {
    console.log(enteredInp, selectedStartDate, selectedEndDate, selectedTime); // Selected date is now a date string in "YYYY-MM-DD" format
    setSelectedStartDate(null); // Clear the selectedDate state
    setSelectedEndDate(null); // Clear the selectedDate state
    setTimeout(() => {
      message.success("Experience added successfully!");
    }, 1000);

    setEnteredInp({ title: "", companyName: "", description: "" }); // Clear the form by setting enteredInp to an empty object
  };

  const handleTimePickerChange = (time) => {
    setSelectedTime(time ? time.format("HH:mm:ss") : null); // Use moment.format to get the selected time in the desired format
  };

  const isFormValid =
    Object.values(enteredInp).every((value) => value.trim() !== "") &&
    selectedStartDate !== null &&
    selectedEndDate !== null &&
    selectedTime !== null;

  return (
    <>
      <h2 className="text-xl font-semibold tracking-wider text-blue-400">
        Add New Experience
      </h2>
      <Form
        onFinish={onFinishHandler}
        className="bg-zinc-300 rounded px-10 py-8 shadow-lg "
      >
        <Form.Item
          label="Job Title"
          name="title"
          labelCol={{ span: 24 }} // Use the full width for the label
        >
          <Input
            placeholder="Job Title"
            name="title"
            id="title"
            required
            allowClear
            onChange={changeInpHandler}
            value={enteredInp.title}
          />
        </Form.Item>
        <Form.Item
          label="Company Name"
          name="companyName"
          labelCol={{ span: 24 }} // Use the full width for the label
        >
          <Input
            placeholder="Company Name"
            name="companyName"
            id="companyName"
            required
            allowClear
            onChange={changeInpHandler}
            value={enteredInp.companyName}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          labelCol={{ span: 24 }} // Use the full width for the label
        >
          <Input.TextArea
            placeholder="Describe your position..."
            name="description"
            id="description"
            required
            allowClear
            onChange={changeInpHandler}
            value={enteredInp.description}
          />
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          labelCol={{ span: 24 }} // Use the full width for the label
        >
          <DatePicker.RangePicker
            className="w-full"
            required
            value={
              selectedStartDate && selectedEndDate
                ? [
                    moment(selectedStartDate, "YYYY-MM-DD"),
                    moment(selectedEndDate, "YYYY-MM-DD"),
                  ]
                : null
            }
            onChange={handleDatePickerChange} // Use onChange to get the selected date objects
          />
        </Form.Item>

        <Form.Item
          label="Time"
          name="time"
          labelCol={{ span: 24 }} // Use the full width for the label
        >
          <TimePicker
            className="w-full"
            value={selectedTime ? moment(selectedTime, "HH:mm:ss") : null}
            onChange={handleTimePickerChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="bg-blue-400 flex items-center justify-center"
            htmlType="submit"
            block
            disabled={!isFormValid}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ExpForm;

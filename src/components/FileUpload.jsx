import { Button, Spin, Upload } from "antd";
import React from "react";

const FileUpload = () => {
  return (
    <div style={{ height: "200px", width: "300px" }}>
      <Upload.Dragger
        multiple
        action="http://localhost:3000/"
        listType="picture"
        accept=".png, .jpg, .jpeg"
        // method for defining the size of the file
        beforeUpload={(file) => {
          console.log({ file });
          return false;
        }}
        defaultFileList={[
          {
            uid: "xyz",
            name: "existing_file",
            status: "uploading",
            percent: 50,
            url: "https: //www.google.com/",
          },
        ]}
        // custom spinner
        // iconRender={() => {
        //   return <Spin />;
        // }}
        progress={{
          strokeWidth: 2,
          strokeColor: {
            "0%": "#f0f",
            "100%": "#ff0",
          },
          style: {
            top: 8,
          },
        }}
      >
        <p className="text-lg font-medium ">
          Drag Files here <span className="ml-2">OR</span>
        </p>

        <br />
        <Button>Click to Upload</Button>
      </Upload.Dragger>
    </div>
  );
};

export default FileUpload;

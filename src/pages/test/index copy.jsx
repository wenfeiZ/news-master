import React, { useRef } from "react";
import { Button, Form, Input, DatePicker } from "antd";
import moment from "moment";

const App = () => {
  const basicRef = useRef(null);

  const detailsFn = () => {
    // const objData = {
    //   username: "张三",
    //   age: 24,
    //   times: "2023-02-22 00:00:00",
    // };
    // objData.times = moment(objData.times);
    // basicRef.current.setFieldsValue(objData);
  };

  const objData = {
    username: "张三",
    age: 24,
    times: "2023-02-22 00:00:00",
  };
  objData.times = moment(objData.times);
  basicRef.current.setFieldsValue(objData);

  return (
    <div>
      <div>
        <Form name="basic" ref={basicRef}>
          <Form.Item label="姓名" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="年龄" name="age">
            <Input />
          </Form.Item>

          <Form.Item label="日期" name="times">
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
        </Form>
      </div>

      <Button type="primary" onClick={detailsFn}>
        回显数据测试
      </Button>
    </div>
  );
};

export default App;

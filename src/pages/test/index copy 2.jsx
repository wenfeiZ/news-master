import React, { useRef } from "react";
import { Button, Checkbox, Form, Input, DatePicker } from "antd";
import moment from "moment";

const App: React.FC = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const basicRef = useRef(null);
  const form = Form.useForm();

  const objData = {
    username: "张三",
    age: 24,
    times: "2023-02-22 00:00:00",
  };

  objData.times = moment(objData.times);
  console.log(basicRef);
  debugger;
  basicRef.current.setFieldsValue(objData);

  return (
    <Form
      name="basic"
      ref={basicRef}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label="日期" name="times">
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;

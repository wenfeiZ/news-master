import React from "react";
import { Input, Form, Col, Row, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function FormlistDemo() {
  const onFormFinish = (values: any) => {
    console.log(values);
  };

  let formListInitValues = [
    {
      key: 0,
      name: 0,
      isListField: true,
      fieldKey: 0,
      first: "tian",
      last: "jin",
    },
    {
      key: 0,
      name: 0,
      isListField: true,
      fieldKey: 0,
      first: "tian1",
      last: "jin1",
    },
  ];

  return (
    <Form layout="horizontal" labelCol={{ span: 6 }} onFinish={onFormFinish}>
      <Form.List name="users" initialValue={formListInitValues}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }, index, arr) => {
              return (
                <Space
                  key={key}
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    //name采用数组方式，第一个元素name可理解为行号，first为字段名
                    //行号+字段名联合才能定位列表行字段
                    name={[name, "first"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing first name",
                      },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    rules={[
                      {
                        required: true,
                        message: "Missing last name",
                      },
                    ]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              );
            })}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Row>
        <Col span={8} offset={20}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

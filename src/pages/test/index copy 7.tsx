import { Form, Input, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import * as React from "react";
const { useState, useEffect } = React;
const token = localStorage.getItem("token");
const AddUpgradeForm = (params: any) => {
  const { visible, cancelModal, okModal } = params;
  const [file, setFile] = useState<any>();
  const [form] = Form.useForm();

  const ob = [
    {
      uid: "1",
      name: "xxx.png",
      status: "done",
      url: "http://www.baidu.com/xxx.png",
    },
  ];

  const [defaultFileList, setDefaultFileList] = useState<any>(ob);

  useEffect(() => {
    form.resetFields();
    setFile(defaultFileList[0].name);
    console.log(defaultFileList);
    form.setFieldsValue({
      file: "xxx.png",
    });
  }, []);

  const onFinish = () => {
    if (!file) {
      debugger;
      form.setFieldsValue({
        file: "",
      });
    }
    form.validateFields().then((values) => {
      console.log(values);
    });
  };

  useEffect(() => {
    // 在Form表单中可以通过props.onChange来改变form表单中Upload组件这一项的返回值
    props.onChange && props.onChange(props.defaultFileList);
  }, [defaultFileList]);

  const props: any = {
    name: "file",
    showUploadList: true,
    // accept: ".bin,.tar,.gz,.zip",
    defaultFileList,

    maxCount: 1,
    beforeUpload: async (file: any) => {
      // const md5 = await getMD5(file);
      // if (md5 === "error") message.error("md5解析失败");
      // getBase64(file, (url) => {
      //   let finalFile = {
      //     file,
      //     md5,
      //     size: transferSize(file.size),
      //     content: url,
      //   };
      //   setFile(finalFile);
      // });
    },
    customRequest: async (options: any) => {
      // const { file, onSuccess, onProgress } = options;
      // onProgress(file);
      // const md5 = await getMD5(file);
      // if (md5 === "error") message.error("md5解析失败");
      // getBase64(file, (url) => {
      //   let finalFile = {
      //     file,
      //     md5,
      //     size: file.size,
      //     content: url,
      //   };
      //   setFile(finalFile);
      //   onSuccess(finalFile, undefined);
      // });

      setFile("xx");
    },
    onRemove: (file: any) => {
      setFile("");
      debugger;
    },
  };

  return (
    <div>
      <Form
        form={form}
        layout="horizontal"
        name="nest-messages"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="固件名称"
          rules={[
            {
              required: true,
              message: "必填",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="version"
          label="固件版本"
          rules={[
            {
              required: true,
              message: "必填",
            },
            {
              pattern: /^[a-zA-Z0-9_\.-]{0,31}$/,
              message: "请填写正确格式",
            },
          ]}
        >
          <Input placeholder="仅支持英文字母、数字、点、中划线和下划线，长度限制1~32" />
        </Form.Item>
        <Form.Item
          name="product"
          label="产品名称"
          rules={[
            {
              required: true,
              message: "必填",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="固件描述" rules={[]}>
          <Input.TextArea rows={2} />
        </Form.Item>
        <Form.Item
          name="file"
          label="选择固件"
          rules={[
            {
              required: true,
              message: "固件必选",
            },
          ]}
        >
          <Upload {...props}>
            <Button icon={<PlusOutlined />}>点击选择固件</Button>
            <span className="hint">
              仅支持 bin, tar, gz, zip 类型的文件,文件大小不能超过1024MB
            </span>
          </Upload>
        </Form.Item>

        <div>
          <Button type="primary" onClick={onFinish}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddUpgradeForm;

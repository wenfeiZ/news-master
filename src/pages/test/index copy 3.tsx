import * as React from "react";
// import styles from "./VideoEdit.module.scss";
// import { IVideoEditProps } from "./IVideoEditProps";
import { Button, Form, Input, message, Upload } from "antd";
// import "../../../utils/antdConfig";
// import Loading from "../../../components/Loading";
// import "react-quill/dist/quill.snow.css";
// import { goToUrl, getLang } from "../../../utils";
// import Upload from '../../../components/Upload';
import type { UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { useState, useEffect, useRef } = React;

const VideoEdit = (props: any) => {
  // const [loading, setLoading] = useState<boolean>(false);
  // const [loadingTxt, setLoadingTxt] = useState<string>(null);
  // const [indicators, setIndicators] = useState<any>({})
  // const lang = getLang();
  const [form] = Form.useForm();

  const [file, setFile] = useState<any>();
  // const { api } = props;
  const onFinish = () => {
    form.validateFields().then((values) => {
      // values.CoverImgFile = values.CoverImgFile.file.originFileObj;
      // values.VideoFile = values.VideoFile.file.originFileObj;
      // console.log("values:", values);
      // setLoading(true);
      console.log(values);
      debugger;

      // api
      //   .addVideo(values)
      //   .then((res: any) => {
      //     console.log(res, "res");
      //     setLoading(false);
      //     message.success("添加视频成功").then((res) => {
      //       window.history.go(-1);
      //     });
      //   })
      //   .catch((err: any) => {
      //     console.log(err);
      //     setLoading(false);
      //   });
    });
  };

  useEffect(() => {
    // getHomeIndicators()
  }, []);

  const propsUPImg: UploadProps = {
    name: "propsUPImg",
    maxCount: 1,
    defaultFileList: [
      {
        uid: "1",
        name: "xxx.png",
        status: "done",
        url: "http://www.baidu.com/xxx.png",
      },
    ],
    beforeUpload: (file) => {
      // const isPNG = file.type === 'image/png';
      // // ["image/jpeg", 'image/jpg', 'image/png']
      // if (!isPNG) {
      //   message.error(`${file.name} is not a png file`);
      // }
      // return isPNG || Upload.LIST_IGNORE;

      let typeArr = ["image/jpeg", "image/jpg", "image/png"];
      var isPNG = typeArr.indexOf(file.type);
      if (isPNG == -1) {
        console.log(1);
        console.log(file.type);
        message.error(`${file.name} is not a qualified file`);
        return false || Upload.LIST_IGNORE;
      } else {
        console.log(2);
        console.log(file.type);
        return true || Upload.LIST_IGNORE;
      }

      // return new Promise((resolve, reject) => {
      //   let typeArr = ["image/jpeg", 'image/jpg', 'image/png']
      //   var isPNG = typeArr.indexOf(file.type);
      //   if (isPNG == -1) {
      //     message.error(`${file.name} is not a qualified file`);
      //     return reject(false);
      //   }
      //   // const isLt2M = file.size / 1024 / 1024 < 2;
      //   // if (!isLt2M) {
      //   //   message.error('请上传 ≤ 2MB 以内的图片');
      //   //   return reject(false);
      //   // }
      //   return resolve(true);
      // })
    },
    onChange(info) {
      console.log(info, "info");
      if (info.file.status !== "uploading") {
        console.log(info.file.originFileObj, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove() {},
  };

  // useEffect(() => {
  //   // 在Form表单中可以通过props.onChange来改变form表单中Upload组件这一项的返回值
  //   props.onChange && props.onChange(props.defaultFileList);
  // }, [defaultFileList);

  const propsUPVideo: UploadProps = {
    name: "propsUPVideo",
    maxCount: 1,
    beforeUpload: (file) => {
      // const isPNG = file.type === 'video/mp4';
      let typeArr = [
        "video/mp4",
        "video/ogg",
        "video/flv",
        "video/avi",
        "video/wmv",
        "video/rmvb",
        "video/mov",
      ];
      var isVideo = typeArr.indexOf(file.type);
      if (isVideo == -1) {
        message.error(`${file.name} is not a qualified file`);
        return false || Upload.LIST_IGNORE;
      } else {
        return true || Upload.LIST_IGNORE;
      }
    },
    onChange(info) {
      console.log(info, "info");
      if (info.file.status !== "uploading") {
        console.log(info.file.originFileObj, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onRemove() {
      setFile(null);
      debugger;
    },
  };

  // useEffect(() => {
  //   form.setFieldsValue(indicators)
  // }, [indicators])

  // function getHomeIndicators() {
  //   api.getHomeIndicators().then((res: any) => {
  //     console.log('指标信息', res)
  //     let indicatorsInfo = res || {}
  //     setIndicators(indicatorsInfo)
  //   })
  // }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onCancle = () => {
    window.history.go(-1);
  };

  return (
    <div>
      <div>
        <div>
          <Form
            name="basic"
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
            size="large"
          >
            <Form.Item
              label="Title"
              name="Title"
              rules={[
                {
                  required: true,
                  message: "Please input Title!",
                },
              ]}
            >
              <Input placeholder="Please input Title" />
            </Form.Item>

            <Form.Item
              label="JPTitle"
              name="JPTitle"
              rules={[
                {
                  required: true,
                  message: "Please input JPTitle!",
                },
              ]}
            >
              <Input placeholder="Please input JPTitle" />
            </Form.Item>

            <Form.Item
              label="From"
              name="From"
              rules={[
                {
                  required: true,
                  message: "Please input From!",
                },
              ]}
            >
              <Input placeholder="Please input From" />
            </Form.Item>

            <Form.Item
              label="CoverImgFile"
              name="file"
              rules={[
                {
                  required: true,
                  message: "Please upload CoverImg!",
                },
              ]}
            >
              <Upload {...propsUPImg}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            {/* <Form.Item
              label="VideoFile"
              name="VideoFile"
              rules={[
                {
                  required: true,
                  message: "Please upload Video!",
                },
              ]}
            >
              <Upload {...propsUPVideo}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item> */}

            <div>
              <Button type="default" onClick={onCancle}>
                Cancel
              </Button>
              <Button type="primary" onClick={onFinish}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default VideoEdit;

import * as React from "react";
// import { Button, Form, Input, message, Upload } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import Search from "./components/search";
import Table from "./components/table";
import NoData from "./components/noData";
import Recommend from "./components/recommend";

const { useState, useEffect, useRef } = React;

const History = (props: any) => {
  useEffect(() => {}, []);

  return (
    <div>
      <div>历史问题查询</div>
      <Search />
      <Table />
      <NoData />
      <Recommend />
    </div>
  );
};

export default History;

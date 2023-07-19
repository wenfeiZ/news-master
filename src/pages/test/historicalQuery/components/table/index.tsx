import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import MyPagination from "../Pagination";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const tableData: DataType[] = [];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState(tableData);

  // 跳转页数据显示
  const onChangePage = (page: any, pageSize: any) => {
    console.log("page", page, "pageSize", pageSize);
    debugger;
    // 重新调用接口将参数传递过去
    // props.BlogActions.asyncUserListAction(page, pageSize).then((res: any) => {
    //   // console.log("返回的数据：", res.data);
    //   let list = res.data.data;
    //   setList(list);
    //   // 切换行
    //   setCurrentPage(page);
    //   // 根据页面数据显示页码
    //   setPageSize(pageSize);
    // });
  };

  return (
    <div>
      <Table columns={columns} dataSource={list} pagination={false} />
      <MyPagination
        currentPage={currentPage} // 当前页
        pageSize={pageSize} // 每页条数
        total={total} // 数据总数
        onChange={onChangePage}
      />
    </div>
  );
};

export default App;

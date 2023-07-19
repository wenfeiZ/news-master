import React from "react";
import { Empty, Button } from "antd";

const App: React.FC = () => (
  <div>
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    <div>期待你成为第一个提出此问题的人！</div>
    <Button type="primary">新增问题</Button>
  </div>
);

export default App;

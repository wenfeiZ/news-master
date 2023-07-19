//  FullScreen.tsx

import React, { memo, useEffect } from "react";
import { Spin } from "antd";
// import IconUrl from "@/assets/icon/closeIcon.png";
import "./index.less";

/*
 *全屏表格自适配组件
 *@title 标题
 *@visible 是否显示
 *@handleCancel 取消事件
 *@content 组件内容
 *@loadding 状态
 */

function FullScreen({
  title,
  visible,
  handleCancel,
  content,
  loadding = false,
}: any) {
  // const collapsed = localStorage.getItem("collapsed");
  // const collapse = collapsed ?? "1";

  useEffect(() => {
    return () => {
      localStorage.removeItem("collapsed");
    };
  }, []);
  return (
    visible && (
      <div
        id="commonModal"
        // style={
        //   +collapse === 1 ? { left: 210, top: 93 } : { left: 100, top: 93 }
        // }
      >
        {/*<!-- 顶部 -->*/}
        <div className="modalTop">
          <div className="modal_title">
            <div className="topTitle">{title}</div>
          </div>
          <div>
            <img
              className="topIcon"
              // src={IconUrl}
              alt=""
            />
            <div onClick={handleCancel}>222222222</div>
          </div>
        </div>
        <Spin spinning={loadding} tip="Loading..." size="large" delay={500}>
          <div className="modalMain">{content}</div>
        </Spin>
      </div>
    )
  );
}

export default memo(FullScreen);

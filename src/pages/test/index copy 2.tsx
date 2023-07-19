import React, { useState } from "react";
import moment from "moment"; // 引入moment.js
import { DatePicker, Button } from "antd";

export default function Aaa() {
  // 获取当前时间的方法
  let getNowFormatDate = () => {
    //获取当前时间
    let date = new Date();
    let seperator1 = "-"; //年月日之间的分隔
    let seperator2 = ":"; //时分秒之间的分隔
    let month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let strHours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let strMinutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let strSeconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let currentdate =
      date.getFullYear() +
      seperator1 +
      month +
      seperator1 +
      strDate +
      " " +
      strHours +
      seperator2 +
      strMinutes +
      seperator2 +
      strSeconds; //拼接一下
    return currentdate; //返回
  };
  const [time, setTime] = useState(getNowFormatDate());
  const changeTime = () => {
    setTimeout(() => {
      setTime("2023-01-01 18:00:00");
    }, 1000);
  };
  const getTime = (_: any, time: any) => {
    setTime(time);
  };
  setTimeout(() => {
    setTime("2023-01-01 18:00:00");
  }, 1000);
  return (
    <div>
      <DatePicker
        value={moment(time, "YYYY-MM-DD HH:mm:ss")}
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="选择日期"
        showTime
        onChange={getTime}
      />
      <Button onClick={changeTime}>修改时间</Button>
    </div>
  );
}

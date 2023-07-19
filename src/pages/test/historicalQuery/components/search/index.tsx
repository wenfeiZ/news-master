import React, { useState } from "react";
import { Select } from "antd";
// import jsonp from "fetch-jsonp";
import qs from "qs";
import type { SelectProps } from "antd";

let timeout: ReturnType<typeof setTimeout> | null;
let currentValue: string;

const fetch = (value: string, callback: Function) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  const fake = () => {
    const str = qs.stringify({
      code: "utf-8",
      q: value,
    });
    // jsonp(`https://suggest.taobao.com/sug?${str}`)
    //   .then((response: any) => response.json())
    //   .then((d: any) => {
    //     if (currentValue === value) {
    //       const { result } = d;
    //       const data = result.map((item: any) => ({
    //         value: item[0],
    //         text: item[0],
    //       }));
    //       callback(data);
    //     }
    //   });
    const data = [
      {
        value: 1,
        text: "111111",
      },
      {
        value: 2,
        text: "2222222",
      },
      {
        value: 3,
        text: "33333333333333333333333",
      },
      {
        value: 4,
        text: "4444",
      },
      {
        value: 5,
        text: "55555555555",
      },
      {
        value: 6,
        text: "66666666666",
      },
      {
        value: 7,
        text: "777777777777",
      },
    ];
    callback(data);
  };
  if (value) {
    timeout = setTimeout(fake, 300);
  } else {
    callback([]);
  }
};

const SearchInput: React.FC<{
  placeholder: string;
  style: React.CSSProperties;
}> = (props) => {
  const [data, setData] = useState<SelectProps["options"]>([]);
  const [value, setValue] = useState<string>();

  const handleSearch = (newValue: string) => {
    fetch(newValue, setData);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};

const App: React.FC = () => (
  <SearchInput placeholder="请输入关键字" style={{ width: 300, height: 60 }} />
);

export default App;

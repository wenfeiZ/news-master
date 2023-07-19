import React, { useState, useEffect, useRef } from "react";
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import "./index.less";

const CustomCard = ({ children, height, extra }) => {
  const [getFlag, setFlag] = useState(false);
  const [getHeight, setHeight] = useState(0);
  const [getOverflow, setOverflow] = useState("inherit");
  const heightRef = useRef(null);

  useEffect(() => {
    // console.log(heightRef.current.children.clientHeight);
    const childHeight = heightRef?.current?.children[0].clientHeight;
    console.log("childHeight----", childHeight);
    if (height > childHeight) {
      setHeight(childHeight);
      console.log(1111111);
    } else {
      setHeight(height);
      console.log(2222222222);
    }
    click();
  }, []);

  const click = () => {
    const childHeight = heightRef?.current?.children[0].clientHeight;
    if (height > childHeight) return;
    setFlag(!getFlag);
    if (getFlag) {
      setHeight(childHeight);
      setOverflow("inherit");
      console.log(333333333333);
    } else {
      setHeight(height || getHeight);
      setOverflow("hidden");
      console.log(4444444);
    }
  };

  return (
    <div>
      <div ref={heightRef} style={{ height: getHeight, overflow: getOverflow }}>
        {children}
      </div>
      {getFlag ? (
        <FullscreenExitOutlined onClick={click} />
      ) : (
        <FullscreenOutlined onClick={click} />
      )}
    </div>
  );
};

export default CustomCard;

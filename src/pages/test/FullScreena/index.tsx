import React from "react";
import clns from "classnames";
import { useBoolean } from "ahooks";
import screenfull from "screenfull";
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import "./index.less";

const CustomCard: React.FC<{
  title?: React.ReactNode;
  extra?: React.ReactNode;
}> = ({ children, title, extra }: any) => {
  const [fullScreen, { toggle }] = useBoolean(false);
  console.log(children);

  return (
    <div
      className={clns({
        "custom-card": true,
        "custom-card--fullscreen": fullScreen,
      })}
    >
      <div className="custom-card__title">
        <div className="custom-card__title--left">{title}</div>
        <div className="custom-card__title--right">
          {extra}
          <span
            className="custom-card__title--full"
            onClick={() => {
              if (screenfull.isEnabled) {
                const element = document.body;
                screenfull.toggle(element);
                toggle();
              }
            }}
          >
            {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          </span>
        </div>
      </div>
      <div className="custom-card__body"> {children}</div>
    </div>
  );
};

export default CustomCard;

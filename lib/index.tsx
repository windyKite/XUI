import React, { MouseEventHandler } from "react";
import ReactDom from "react-dom";
import Icon from "./Icon";

const fn: MouseEventHandler<SVGElement> = e => {
  console.log(e);
};

ReactDom.render(
  <Icon
    name="wechat"
    className="a"
    onClick={fn}
    onMouseEnter={() => {
      console.log("mouseEnter");
    }}
  />,
  document.getElementById("root")
);

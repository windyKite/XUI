import React, { MouseEventHandler } from "react";
import ReactDom from "react-dom";
import Button from "./Button/Button";

const fn: MouseEventHandler = e => {
  console.log(e);
};

ReactDom.render(
  <div>
    <Button
      icon="wechat"
      size="small"
      name="wechat"
      appearance="default"
      onClick={fn}
      onMouseEnter={() => {
        console.log("mouseEnter");
      }}
      style={{marginRight: "10px"}}
    >
      button
    </Button>
    <Button
      size="large"
      name="wechat"
      appearance="primary"
      onClick={fn}
      onMouseEnter={() => {
        console.log("mouseEnter");
      }}
      style={{marginRight: "10px"}}
    >
      button
    </Button>
    <Button
      name="wechat"
      appearance="subtle"
      onClick={fn}
      onMouseEnter={() => {
        console.log("mouseEnter");
      }}
      style={{marginRight: "10px"}}
    >
      button
    </Button>
    <Button
      name="wechat"
      appearance="ghost"
      onClick={fn}
      onMouseEnter={() => {
        console.log("mouseEnter");
      }}
      style={{marginRight: "10px"}}
      disabled
    >
      button
    </Button>
    <Button
      name="wechat"
      appearance="link"
      onClick={fn}
      onMouseEnter={() => {
        console.log("mouseEnter");
      }}
      style={{marginRight: "10px"}}
    >
      button
    </Button>
  </div>,
  document.getElementById("root")
);

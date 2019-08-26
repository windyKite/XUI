import React from "react";
import wechat from "./icons/wechat.svg";
interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return <span>{props.name}</span>;
};

export default Icon;

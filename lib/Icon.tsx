import React from "react";
import "./importIcons.js";
import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const { name, ...restProps } = props;
  return (
    <svg className="Xui-icon" {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;

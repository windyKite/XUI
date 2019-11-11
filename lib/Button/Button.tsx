import React from "react";
import Icon from '../Icon/Icon'
import classNames from "classnames";
import "./Button.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  appearance?: "default" | "primary" | "subtle" | "ghost";
  disabled?: boolean;
  href?: string;
  size?: "large" | "small";
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  icon,
  appearance = "default",
  color,
  disabled,
  href,
  size,
  children,
  ...restProps
}) => {
  const classes = classNames("Xui-button", "ripple", className,appearance, color, size, { disabled })

  if(icon){
    return (
      <button className={classes} {...restProps}>
        <Icon name={icon}/>
        {children}
      </button>
    )
  }else{
    return (
      <button className={classes} {...restProps}>
        {children}
      </button>
    )
  }
}

export default Button
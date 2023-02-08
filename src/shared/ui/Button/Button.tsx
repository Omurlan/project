import React, { ComponentProps } from "react";
import styles from "./Button.module.scss";
import cn from "shared/lib/classNames/classNames";

export type ButtonTypes = "CLEAR";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
  theme?: ButtonProps;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={cn(styles.Button, [styles.clear, className])} {...props}>
      {children}
    </button>
  );
};

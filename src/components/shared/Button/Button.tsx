import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = forwardRef<any, ButtonProps>(
  (
    { className, style, type, form, disabled, label, onClick, onKeyDown },
    ref
  ) => {
    const classes = classNames(["font-small", styles.button, className]);

    return (
      <button
        ref={ref}
        className={classes}
        style={style}
        onClick={onClick}
        onKeyDown={onKeyDown}
        type={type}
        disabled={disabled}
        form={form}
      >
        {label}
      </button>
    );
  }
);

export default Button;

interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit";
  form?: string;
  disabled?: boolean;
  label?: string;
  onClick?: (event: any) => void;
  onKeyDown?: (event: any) => void;
}

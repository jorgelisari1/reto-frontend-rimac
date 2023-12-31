import React, { FC, MouseEvent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type ButtonHover = "on" | "off";
type ButtonTheme = "default" | "red" ;
type ButtonSize =  "md" | "sm";
type Props = {
  text: string;
  outline?: boolean;
  loading?: boolean;
  expand?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  hover?: ButtonHover;
  theme?: ButtonTheme;
  isSubmit?: boolean;
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({
  text,
  size,
  theme,
  hover,
  expand,
  loading,
  onClick,
  outline,
  isSubmit,
  disabled
}) => (
  <button
    disabled={disabled}
    type={isSubmit ? "submit" : "button"}
    onClick={!loading ? onClick : undefined}
    className={classNames(styles.button, {
      [styles["--expand"]]: expand,
      [styles["--loading"]]: loading,
      [styles["--outline"]]: outline,
      [styles["--small"]]: size === "sm",
      [styles["--medium"]]: size === "md",
      [styles["--red"]]: theme === "red",
      [styles["--disabled-hover"]]: hover === "off" || loading,
    })}
  >
    {!loading && text}
  </button>
);

Button.defaultProps = {
  size: "md",
  hover: "on",
  theme: "default",
};

export default Button;

import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
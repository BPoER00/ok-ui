import clsx from "clsx";

import styles from "./Card.module.css";

import type { CardProps } from "./Card.types";

const radiusMap = {
  none: styles.none,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
};

const shadowMap = {
  none: styles.shadowNone,
  sm: styles.shadowSm,
  md: styles.shadowMd,
  lg: styles.shadowLg,
};

const alignMap = {
  left: styles.left,
  center: styles.center,
  right: styles.right,
};

export const Card = ({
  title,
  subtitle,
  footer,
  children,

  radius = "lg",
  shadow = "md",

  align = {},

  className,
  classNames,

  styles: customStyles,

  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      className={clsx(
        styles.root,
        radiusMap[radius],
        shadowMap[shadow],
        className,
        classNames?.root
      )}
      style={customStyles?.root}
    >
      {(title || subtitle) && (
        <header
          className={clsx(
            styles.header,
            classNames?.header
          )}
          style={customStyles?.header}
        >
          {title && (
            <div
              className={clsx(
                styles.title,
                alignMap[align.title ?? "left"],
                classNames?.title
              )}
            >
              {title}
            </div>
          )}

          {subtitle && (
            <div
              className={clsx(
                styles.subtitle,
                alignMap[align.subtitle ?? "left"],
                classNames?.subtitle
              )}
            >
              {subtitle}
            </div>
          )}
        </header>
      )}

      <div
        className={clsx(
          styles.body,
          classNames?.body
        )}
        style={customStyles?.body}
      >
        {children}
      </div>

      {footer && (
        <footer
          className={clsx(
            styles.footer,
            classNames?.footer
          )}
          style={customStyles?.footer}
        >
          {footer}
        </footer>
      )}
    </div>
  );
};
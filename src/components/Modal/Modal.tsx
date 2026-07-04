import clsx from "clsx";
import styles from "./Modal.module.css";
import type { ModalProps } from "./Modal.types";

const sizeMap: Record<string, string> = {
  xs: styles.xs,
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
  "2xl": styles.size2xl,
  "3xl": styles.size3xl,
  "4xl": styles.size4xl,
  full: styles.full,
};

const alignMap: Record<string, string> = {
  left: styles.left,
  center: styles.center,
  right: styles.right,
};

export const Modal = ({
  open,
  onClose,

  title,
  subtitle,
  children,

  size = "md",
  closable = true,

  primaryAction,
  secondaryAction,

  align = {},

  className,
  classNames,
  styleOverrides,

  ...props
}: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className={clsx(styles.overlay, classNames?.overlay)}
      style={styleOverrides?.overlay}
      onClick={onClose}
    >
      <div
        {...props}
        className={clsx(
          styles.modal,
          sizeMap[size],
          className,
          classNames?.modal
        )}
        style={styleOverrides?.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        {(title || subtitle || closable) && (
          <header
            className={clsx(styles.header, classNames?.header)}
            style={styleOverrides?.header}
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

        {/* BODY */}
        <div className={clsx(styles.body, classNames?.body)}>
          {children}
        </div>

        {/* FOOTER */}
        {(primaryAction || secondaryAction) && (
          <footer className={clsx(styles.footer, classNames?.footer)}>
            <div
              className={clsx(
                styles.actionWrapper,
                alignMap[align.secondaryAction ?? "left"],
                classNames?.secondaryActionWrapper
              )}
            >
              {secondaryAction}
            </div>

            <div
              className={clsx(
                styles.actionWrapper,
                alignMap[align.primaryAction ?? "right"],
                classNames?.primaryActionWrapper
              )}
            >
              {primaryAction}
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};
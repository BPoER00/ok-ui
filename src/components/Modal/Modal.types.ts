import type { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type ModalSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "full";

export type ModalAlign = "left" | "center" | "right";

export interface ModalClassNames {
  overlay?: string;
  modal?: string;
  header?: string;
  body?: string;
  footer?: string;

  title?: string;
  subtitle?: string;

  primaryActionWrapper?: string;
  secondaryActionWrapper?: string;

  closeButton?: string;
}

export interface ModalStyles {
  overlay?: CSSProperties;
  modal?: CSSProperties;
  header?: CSSProperties;
  body?: CSSProperties;
  footer?: CSSProperties;
}

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose?: () => void;

  title?: ReactNode;
  subtitle?: ReactNode;

  children: ReactNode;

  size?: ModalSize;
  closable?: boolean;

  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;

  align?: {
    title?: ModalAlign;
    subtitle?: ModalAlign;
    primaryAction?: ModalAlign;
    secondaryAction?: ModalAlign;
  };

  classNames?: ModalClassNames;
  styles?: ModalStyles;
}
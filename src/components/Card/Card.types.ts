import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type CardRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type CardShadow =
  | "none"
  | "sm"
  | "md"
  | "lg";

export type CardAlign =
  | "left"
  | "center"
  | "right";

export interface CardClassNames {
  root?: string;
  header?: string;
  body?: string;
  footer?: string;
  title?: string;
  subtitle?: string;
}

export interface CardStyles {
  root?: CSSProperties;
  header?: CSSProperties;
  body?: CSSProperties;
  footer?: CSSProperties;
}

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  title?: ReactNode;

  subtitle?: ReactNode;

  footer?: ReactNode;

  children?: ReactNode;

  radius?: CardRadius;

  shadow?: CardShadow;

  align?: {
    title?: CardAlign;
    subtitle?: CardAlign;
  };

  classNames?: CardClassNames;

  styles?: CardStyles;
}
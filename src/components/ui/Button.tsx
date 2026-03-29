"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  analyticsEventName?: string;
  analyticsParams?: Record<string, unknown>;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 border border-slate-900",
  secondary:
    "bg-white text-slate-900 hover:bg-slate-50 border border-slate-300",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    analyticsEventName,
    analyticsParams,
  } = props;
  const classes = `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:shadow-none motion-reduce:transition-none motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`.trim();

  const track = () => {
    if (!analyticsEventName) {
      return;
    }

    trackEvent(analyticsEventName, analyticsParams);
  };

  if ("href" in props && props.href) {
    const { href, onClick } = props;

    return (
      <Link
        href={href}
        className={classes}
        onClick={(event) => {
          track();
          onClick?.(event);
        }}
      >
        {children}
      </Link>
    );
  }

  const {
    onClick,
    analyticsEventName: _analyticsEventName,
    analyticsParams: _analyticsParams,
    ...buttonProps
  } = props;
  void _analyticsEventName;
  void _analyticsParams;

  const nativeOnClick = onClick as ButtonHTMLAttributes<HTMLButtonElement>["onClick"] | undefined;

  return (
    <button
      type="button"
      {...buttonProps}
      onClick={(event) => {
        track();
        nativeOnClick?.(event);
      }}
      className={classes}
    >
      {children}
    </button>
  );
}

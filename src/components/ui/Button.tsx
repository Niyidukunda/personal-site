import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = BaseButtonProps & {
  href: string;
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
  const { children, variant = "primary", className = "" } = props;
  const classes = `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ease-out hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 active:shadow-none motion-reduce:transition-none motion-reduce:transform-none ${variantClasses[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" {...props} className={classes}>
      {children}
    </button>
  );
}

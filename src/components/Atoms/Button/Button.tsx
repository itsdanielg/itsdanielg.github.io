import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const DEFAULT_BUTTON_STYLE = ["p-2", "rounded-md", "transition-all", "duration-300"];
const DEFAULT_BUTTON_DISABLED_STYLE = ["opacity-50", "select-none", "pointer-events-none"];
const DEFAULT_BUTTON_NON_ANIMATED_STYLE = ["bg-blue", "text-white", "md:hover:bg-blueHover"];
const DEFAULT_BUTTON_ANIMATED_STYLE = [
  "bg-white",
  "bg-gradient-to-r",
  "from-blue",
  "to-blue",
  "bg-no-repeat",
  "[background-position:0_100%]",
  "[background-size:0_100%]",
  "md:hover:bg-white",
  "md:hover:[background-size:100%_100%]",
  "md:hover:text-white"
];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  animated?: boolean;
  className?: string;
}

export function Button({ children, disabled = false, animated = false, className = "", ...props }: ButtonProps) {
  const disabledStyle = disabled ? DEFAULT_BUTTON_DISABLED_STYLE : "";
  const animatedStyle = animated ? DEFAULT_BUTTON_ANIMATED_STYLE : DEFAULT_BUTTON_NON_ANIMATED_STYLE;

  return (
    <button
      {...props}
      className={twMerge(disabledStyle, animatedStyle, DEFAULT_BUTTON_STYLE, className)}
      disabled={disabled}>
      {children}
    </button>
  );
}

interface LinkButtonProps {
  to: string;
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  animated?: boolean;
  target?: boolean;
  className?: string;
}

export function LinkButton({
  to,
  children,
  disabled = false,
  animated = false,
  target = false,
  className = ""
}: LinkButtonProps) {
  const disabledStyle = disabled ? DEFAULT_BUTTON_DISABLED_STYLE : "";
  const animatedStyle = animated ? DEFAULT_BUTTON_ANIMATED_STYLE : DEFAULT_BUTTON_NON_ANIMATED_STYLE;

  return (
    <Link
      className={twMerge(disabledStyle, animatedStyle, DEFAULT_BUTTON_STYLE, className)}
      target={target ? "_blank" : ""}
      to={to}>
      {children}
    </Link>
  );
}

import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

const DEFAULT_BUTTON_STYLE = ["p-2", "rounded-md", "transition-all", "duration-300"].join(" ");

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  background?: string;
  className?: string;
}

interface LinkButtonProps {
  label: string;
  to: string;
  target?: boolean;
  background?: string;
  className?: string;
}

export function Button({
  label,
  onClick,
  background = "bg-blue-1 text-white md:hover:bg-blue-1-t",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} ${background} ${DEFAULT_BUTTON_STYLE}`}
      onClick={onClick}>
      {label}
    </button>
  );
}

export function LinkButton({
  label,
  to,
  target = false,
  background = "bg-blue-1 text-white md:hover:bg-blue-1-t",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={`${className} ${background} ${DEFAULT_BUTTON_STYLE}`}
      target={target ? "_blank" : ""}
      to={to}>
      {label}
    </Link>
  );
}

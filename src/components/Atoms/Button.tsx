import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

const DEFAULT_BUTTON_STYLE = ["p-2", "rounded-md", "transition-all", "duration-300"].join(" ");
const DEFAULT_BUTTON_DISABLED_STYLE = ["opacity-50", "select-none", "pointer-events-none"].join(" ");

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  background?: string;
  className?: string;
}

interface LinkButtonProps {
  label: string;
  to: string;
  disabled?: boolean;
  target?: boolean;
  background?: string;
  className?: string;
}

export function Button({
  label,
  onClick,
  disabled = false,
  background = "bg-blue-1 text-white md:hover:bg-blue-1-t",
  className = "",
  ...props
}: ButtonProps) {
  const disabledStyle = disabled ? DEFAULT_BUTTON_DISABLED_STYLE : "";

  return (
    <button
      {...props}
      className={`${className} ${background} ${disabledStyle} ${DEFAULT_BUTTON_STYLE}`}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
}

export function LinkButton({
  label,
  to,
  disabled = false,
  target = false,
  background = "bg-blue-1 text-white md:hover:bg-blue-1-t",
  className = "",
  ...props
}: LinkButtonProps) {
  const disabledStyle = disabled ? DEFAULT_BUTTON_DISABLED_STYLE : "";

  return (
    <Link
      {...props}
      className={`${className} ${background} ${disabledStyle} ${DEFAULT_BUTTON_STYLE}`}
      target={target ? "_blank" : ""}
      to={to}>
      {label}
    </Link>
  );
}
